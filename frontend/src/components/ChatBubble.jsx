export default function ChatBubble({ message, type }) {
  if (type === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-xl bg-gray-100 border-l-4 border-blue-500 p-4 whitespace-pre-wrap">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-xl bg-green-100 border border-green-300 p-4 whitespace-pre-wrap">
        {message}
      </div>
    </div>
  );
}