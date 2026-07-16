import SectionTitle from "./SectionTitle";
import FormInput from "./FormInput";

export default function HCPForm({ form, setForm }) {
  const update = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return (
    <div className="rounded-2xl bg-white shadow-lg p-8">
      <SectionTitle title="Log HCP Interaction" />

      <p className="mt-6 font-semibold text-gray-700">
        Interaction Details
      </p>

      <div className="mt-4 grid grid-cols-2 gap-6">
        <FormInput
          label="HCP Name"
          placeholder="Search or select HCP..."
          value={form.hcp_name}
          onChange={(e) => update("hcp_name", e.target.value)}
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Interaction Type
          </label>

          <select
            className="w-full rounded-lg border border-gray-300 p-4"
            value={form.interaction_type}
            onChange={(e) =>
              update("interaction_type", e.target.value)
            }
          >
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </div>

        <FormInput
          label="Date"
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
        />

        <FormInput
          label="Time"
          value={form.time}
          onChange={(e) => update("time", e.target.value)}
        />
      </div>

      <div className="mt-8">
        <FormInput
          label="Attendees"
          placeholder="Enter attendees..."
          value={form.attendees}
          onChange={(e) =>
            update("attendees", e.target.value)
          }
        />
      </div>

      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          Topics Discussed
        </label>

        <textarea
          rows={5}
          value={form.topics}
          onChange={(e) => update("topics", e.target.value)}
          placeholder="Enter discussion topics..."
          className="w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button className="mt-4 text-blue-600 hover:underline">
        🎤 Summarize from Voice Note (Requires Consent)
      </button>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">
          Materials Shared / Samples Distributed
        </h3>

        <p className="mt-3 font-medium">
          Materials Shared
        </p>

        <div className="mt-3 flex items-center justify-between rounded-lg border p-5">
          <span className="text-gray-500">
            No materials added.
          </span>

          <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
            🔍 Search/Add
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">
          Outcome
        </h3>

        <div className="mt-4 flex gap-8">
          <label>
            <input
              type="radio"
              checked={form.outcome === "Positive"}
              onChange={() =>
                update("outcome", "Positive")
              }
            />
            <span className="ml-2">Positive</span>
          </label>

          <label>
            <input
              type="radio"
              checked={form.outcome === "Neutral"}
              onChange={() =>
                update("outcome", "Neutral")
              }
            />
            <span className="ml-2">Neutral</span>
          </label>

          <label>
            <input
              type="radio"
              checked={form.outcome === "Negative"}
              onChange={() =>
                update("outcome", "Negative")
              }
            />
            <span className="ml-2">Negative</span>
          </label>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">
          Follow-up
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-6">
          <FormInput
            label="Follow-up Date"
            value={form.followup_date}
            onChange={(e) =>
              update("followup_date", e.target.value)
            }
          />

          <div>
            <label className="mb-2 block text-sm font-medium">
              Priority
            </label>

            <select
              className="w-full rounded-lg border border-gray-300 p-4"
              value={form.priority}
              onChange={(e) =>
                update("priority", e.target.value)
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Follow-up notes..."
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <button className="rounded-lg border px-6 py-3 hover:bg-gray-100">
          Cancel
        </button>

        <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
          Save Interaction
        </button>
      </div>
    </div>
  );
}