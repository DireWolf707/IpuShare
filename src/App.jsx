import Header from "./components/Header"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="flex flex-col h-screen bg-zinc-400 text-slate-100">
      <div className="mx-1">
        <Header />
      </div>
      <div className="flex flex-grow my-2 mx-4">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
