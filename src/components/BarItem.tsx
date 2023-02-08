import React from "react"
import "./BarItem.css"

export type Props = { legend: string; barPercentage: string; risePercentage: string }

export default function BarItem({ legend, barPercentage, risePercentage }: Props) {
  return (
    <div className="bar-item">
      <div className="bar-item-main" style={{ height: barPercentage }} />
      <div className="bar-item-offset" style={{ height: risePercentage }} />
      <div className="bar-item-legend"> {legend} </div>
    </div>
  )
}
