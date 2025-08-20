export default function Home() {
  return (
    <div className="flex bg-gray-300 min-h-screen items-center justify-center p-4">
      <main className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <header className="flex justify-between text-gray-400 text-sm mb-4">
          <h1>Tue Feb 18 2025</h1>
          <p>9:31:25 p.m.</p>
        </header>

        <h2 className="text-gray-600 text-2xl font-semibold mb-4">
          List Tailwind
        </h2>

        <div className="flex justify-between items-center mb-4">
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((day) => (
            <span key={day} className="text-gray-400 font-medium">
              {day}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          {['24', '25', '26', '27', '28', '29', '30'].map((date) => (
            <span key={date} className="text-gray-500 font-semibold">
              {date}
            </span>
          ))}
        </div>

        <ul className="space-y-3">
          <li className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>
              <p className="text-gray-600 line-through">take out the trash</p>
            </div>
            <span className="text-gray-400 text-sm font-semibold">9:00 AM</span>
          </li>
          <li className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✅</span>
              <p className="text-gray-600 line-through">do homework</p>
            </div>
            <span className="text-gray-400 text-sm font-semibold">12:00 PM</span>
          </li>
          <li className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-lg">⚪</span>
              <p className="text-gray-600">go to grocery store</p>
            </div>
            <span className="text-gray-400 text-sm font-semibold">1:00 PM</span>
          </li>
          <li className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-lg">⚪</span>
              <p className="text-gray-600">run 5 kilometers</p>
            </div>
            <span className="text-gray-400 text-sm font-semibold">4:20 PM</span>
          </li>
          <li className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-lg">⚪</span>
              <p className="text-gray-600">load the dishwasher</p>
            </div>
            <span className="text-gray-400 text-sm font-semibold">9:00 PM</span>
          </li>
          <li className="flex items-center justify-between p-3 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-lg">⚪</span>
              <p className="text-gray-600">Take out the trash</p>
            </div>
            <span className="text-gray-400 text-sm font-semibold">9:00 AM</span>
          </li>
        </ul>
      </main>
    </div>
  );
}