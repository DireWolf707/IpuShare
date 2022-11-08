import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import { useState } from "react"

const STATE = {
  DASH: "dashboard",
  LAN: "lan",
  NET: "net",
}

function App() {
  const [view, setView] = useState(STATE.DASH)

  return (
    <div className="flex flex-col h-screen bg-zinc-400 text-slate-100">
      <div className="mx-1">
        <Header setDash={() => setView(STATE.DASH)} />
      </div>
      <div className="flex flex-grow my-2 mx-4">{view == STATE.DASH && <Dashboard />}</div>
    </div>
  )
}

export default App
