import { useState } from "react";
import axios from "axios";
import ChatBubble from "./ChatBubble";

export default function AIChat({ form, setForm }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "ai",
      message:
        'Log interaction details here (e.g. "Met Dr. Smith, discussed Product-X efficacy, positive sentiment, shared brochure") or ask for help.',
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        message: userInput,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      await axios.post("http://127.0.0.1:8000/ai/chat", {
        interaction_notes: userInput,
      });

      // -------------------------------
      // Extract information from text
      // -------------------------------

      let doctor = "";
      const doctorMatch = userInput.match(/Dr\.?\s+[A-Za-z]+\s*[A-Za-z]*/i);

      if (doctorMatch) {
        doctor = doctorMatch[0];
      }

      let topic = "";
      const topicMatch = userInput.match(/discussed\s+(.*?)(\.|\n|$)/i);

      if (topicMatch) {
        topic = topicMatch[1].trim();
      }

      let notes = "";
      const notesMatch = userInput.match(
        /(requested.*?|shared.*?)(\.|\n|$)/i
      );

      if (notesMatch) {
        notes = notesMatch[1].trim();
      }

      let followup = "";
      const followMatch = userInput.match(
        /follow[- ]?up\s+(.*?)(\.|\n|$)/i
      );

      if (followMatch) {
        followup = followMatch[1].trim();
      }

      let outcome = "Neutral";

      if (/positive|positively/i.test(userInput)) {
        outcome = "Positive";
      }

      if (/negative/i.test(userInput)) {
        outcome = "Negative";
      }

      // -------------------------------
      // Auto-fill CRM Form
      // -------------------------------

      setForm({
        ...form,
        hcp_name: doctor,
        interaction_type: "Meeting",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        attendees: doctor,
        topics: topic,
        outcome: outcome,
        followup_date: followup,
        priority: outcome === "Positive" ? "High" : "Medium",
        notes: notes,
      });

      const aiMessage = `✅ Interaction logged successfully!

The interaction details have been analyzed and the CRM form has been automatically populated.

Fields Updated:
• HCP Name: ${doctor || "Not found"}
• Discussion Topic: ${topic || "Not found"}
• Outcome: ${outcome}
• Follow-up: ${followup || "Not found"}
• Notes: ${notes || "Not found"}

Would you like me to suggest a follow-up action?`;

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          message: aiMessage,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          message:
            "❌ Unable to connect to AI backend. Please make sure the FastAPI server is running.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl border shadow h-[860px] flex flex-col">

      <div className="border-b p-6">
        <h2 className="text-3xl font-bold text-blue-600">
          🤖 AI Assistant
        </h2>

        <p className="text-gray-500">
          Log interaction details here via chat
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            message={msg.message}
            type={msg.type}
          />
        ))}

        {loading && (
          <ChatBubble
            type="ai"
            message="⏳ Analyzing interaction..."
          />
        )}
      </div>

      <div className="border-t p-5">

        <textarea
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe Interaction..."
          className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Analyzing..." : "AI Log"}
        </button>

      </div>

    </div>
  );
}