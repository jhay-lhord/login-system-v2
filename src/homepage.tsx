import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
  {/* Sidebar */}
  <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white flex flex-col shadow-lg">
    <div className="p-8 text-center font-bold text-lg border-b border-blue-500">
      <h2 className="text-xl uppercase tracking-wider">Final Exam</h2>
    </div>
    <nav className="flex-1 p-4 space-y-4">
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        User Information
      </button>
    </nav>
  </aside>

  {/* Main Content */}
  <div className="flex-1 flex flex-col">
    {/* Header */}
    <header className="bg-blue-600 w-full py-6 shadow-lg">
      <h1 className="text-center text-white text-3xl font-extrabold uppercase">
        Final Exam
      </h1>
    </header>

    {/* Main Section */}
    <main className="flex-1 p-10 flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white shadow-xl rounded-lg p-8">
        <p className="text-gray-800 text-xl font-medium">
          Welcome to the final exam page!
        </p>
      </div>
    </main>

    {/* Footer */}
    <footer className="bg-gray-900 w-full py-6 text-center text-white">
      <p className="text-sm font-light tracking-wide">&copy; 2025 GOD BLESS.</p>
    </footer>
  </div>
</div>

  );
};

export default HomePage;