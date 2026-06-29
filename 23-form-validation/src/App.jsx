const App = () => {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Registration Form
        </h1>

        <form className="flex flex-col gap-4">

          <div>
            <label className="block mb-1 font-semibold">
              Name
            </label>
            <input
              className="border-2 border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-emerald-600"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Email
            </label>
            <input
              className="border-2 border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-emerald-600"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Password
            </label>
            <input
              className="border-2 border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-emerald-600"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-semibold active:scale-95 duration-200"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default App;