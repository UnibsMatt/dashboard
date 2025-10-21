import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const sampleData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4000 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 7000 },
  { month: "Jul", revenue: 5000 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex text-white">
      <aside className="w-64 bg-gray-500 shadow-lg flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">My Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className=" hover:bg-blue-500 transition-colors rounded-xl p-4 ">Home</a>
          <a href="#" className=" hover:bg-blue-500 transition-colors rounded-xl p-4 ">Analytics</a>
          <a href="#" className=" hover:bg-blue-500 transition-colors rounded-xl p-4 ">Reports</a>
          <a href="#" className=" hover:bg-blue-500 transition-colors rounded-xl p-4 ">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Users", value: "1,234", color: "bg-blue-500" },
            { title: "Revenue", value: "$12,345", color: "bg-green-500" },
            { title: "Orders", value: "567", color: "bg-cyan-500" },
            { title: "Errors", value: "3", color: "bg-red-500" },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-300 ${card.color}`}
            >
              <p className="text-sm">{card.title}</p>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sampleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="text-gray-200" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
