const Dashboard = () => {
  return (
    <div className="flex divide-x-2 rounded-lg w-full m-2 p-4">
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col space-y-4 p-16 border-2 rounded-xl bg-green-600">
          <h1 className="font-bold text-3xl text-center">LAN Connect</h1>
          <button disabled className="border text-xl hover:bg-blue-600 hover:scale-95 bg-blue-500 rounded mx-auto px-4 py-2">
            Check
          </button>
          <span>This feature will be addd soon!</span>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col space-y-4 p-16 border-2 rounded-xl bg-green-600">
          <h1 className="font-bold text-3xl text-center">NET Connect</h1>
          <button className="border text-xl hover:bg-blue-600 hover:scale-95 bg-blue-500 rounded mx-auto px-4 py-2">Create Room</button>
          <div>
            <input className="mx-2 p-1.5 rounded text-black outline-none" type="text" />
            <button className="border text-xl hover:bg-blue-600 hover:scale-95 bg-blue-500 rounded mx-auto px-4 py-2">Join Room</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
