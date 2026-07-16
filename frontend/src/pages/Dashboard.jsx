import { useState } from "react";
import HCPForm from "../components/HCPForm";
import AIChat from "../components/AIChat";

export default function Dashboard() {

  const [form, setForm] = useState({
    hcp_name: "",
    interaction_type: "Meeting",
    date: "",
    time: "",
    attendees: "",
    topics: "",
    outcome: "",
    followup_date: "",
    priority: "Low",
    notes: "",
  });

  return (
    <div className="bg-slate-100 h-screen overflow-hidden p-6">

      <div className="mx-auto max-w-[1600px] h-full grid grid-cols-12 gap-6">

        <div className="col-span-8 overflow-y-auto pr-2">
          <HCPForm form={form} setForm={setForm} />
        </div>

        <div className="col-span-4 h-full">
          <AIChat form={form} setForm={setForm} />
        </div>

      </div>

    </div>
  );
}