
import React from "react";
import ClientsList from "./components/ClientsList";
import './App.css'

function App() {

  return (
    <>
   <div className="bg-blue-100">
    <h1 class="font-bold text-center text-2xl sm:text-4xl text-white font-serif mb-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-6 rounded-sm shadow-lg">
    Fitness Trainer Appointment Scheduler 🎯
</h1>

      <ClientsList />
    </div>

    </>
  )
}

export default App
