import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-8 text-center font-bold text-lg border-b border-blue-500">
          
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            User Information
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-600 w-full py-4 shadow-md">
          <h1 className="text-center text-white text-2xl font-bold">FINAL EXAM</h1>
        </header>

        <main className="flex-1 p-6 flex items-center justify-center">
          <p className="text-gray-700 text-lg">Welcome to the final exam page!</p>
        </main>

        <footer className="bg-gray-800 w-full py-4 text-center text-white">
          <p>&copy; GOD BLESS.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;