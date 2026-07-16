const leads = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    hospital: "Apollo Hospitals",
    status: "Pending",
  },
  {
    id: 2,
    name: "Dr. Sarah Wilson",
    specialty: "Neurologist",
    hospital: "Yashoda Hospitals",
    status: "Completed",
  },
  {
    id: 3,
    name: "Dr. David Lee",
    specialty: "Dermatologist",
    hospital: "Care Hospitals",
    status: "Follow Up",
  },
  {
    id: 4,
    name: "Dr. Priya Reddy",
    specialty: "Pediatrician",
    hospital: "AIG Hospitals",
    status: "Pending",
  },
];

export default function LeadTable() {
  return (
    <div className="bg-white rounded-2xl shadow h-full p-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Healthcare Professionals
        </h2>

        <input
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-64"
        />

      </div>

      <table className="w-full">

        <thead className="border-b">

          <tr className="text-left">

            <th className="py-4">Name</th>
            <th>Specialty</th>
            <th>Hospital</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr
              key={lead.id}
              className="border-b hover:bg-slate-50 transition"
            >

              <td className="py-5 font-semibold">
                {lead.name}
              </td>

              <td>{lead.specialty}</td>

              <td>{lead.hospital}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${
                    lead.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : lead.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {lead.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}