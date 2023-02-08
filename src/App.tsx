import React from "react"
import "./App.css"
import MainRoutes from "./Routes"
import Sidebar from "./components/Sidebar"
import BarGraph from "./components/BarGraph"
import "./styles.css"

function App() {
  const dataArray1 = [
    {
      value: 200,
      legend: "Year 1"
    },
    {
      value: 300,
      legend: "Year 2"
    },
    {
      value: 700,
      legend: "Year 3"
    },
    {
      value: 500,
      legend: "Year 4"
    }
  ]
  const dataArray2 = [
    {
      value: 500,
      legend: "Year 1"
    },
    {
      value: 300,
      legend: "Year 2"
    },
    {
      value: -200,
      legend: "Year 3"
    },
    {
      value: 700,
      legend: "Year 4"
    }
  ]

  return (
    <div className="App">
      <h1>BRS Parking Visualisation</h1>
      {/** Sidebar */}
      <Sidebar />

      {/** Inner container */}
      <MainRoutes />
      <BarGraph dataArray={dataArray1} />
      <BarGraph dataArray={dataArray2} />
    </div>
  )
}

export default App
