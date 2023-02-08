import React, { useMemo } from "react"
import BarItem from "./BarItem"
import "./BarGraph.css"

export type Props = {
  dataArray: Array<{ value: number; legend: string }>
}

export default function BarGraph({ dataArray }: Props) {
  const [barItems, barsLinePercentage] = useMemo(() => {
    let highestValuePositive = 0
    let highestValueNegative = 0

    dataArray.forEach(({ value }) => {
      if (value < 0) {
        highestValueNegative = Math.max(highestValueNegative, Math.abs(value))
      } else {
        highestValuePositive = Math.max(highestValuePositive, value)
      }
    })

    const highestValueTotal = highestValuePositive + highestValueNegative
    const barsLinePercent = Math.round((highestValueNegative / highestValueTotal) * 100)
    const barsLinePercentage = `${barsLinePercent}%`

    const barItems = dataArray.map((item) => ({
      legend: item.legend,
      barPercentage: `${Math.round((Math.abs(item.value) / highestValueTotal) * 100)}%`,
      risePercentage: item.value > 0 ? barsLinePercentage : "0"
    }))

    return [barItems, barsLinePercentage]
  }, [dataArray])
  return (
    <div className="bar-graph">
      <div className="bars-list">
        {barItems.map((barItem, index) => (
          <BarItem
            key={index}
            legend={barItem.legend}
            barPercentage={barItem.barPercentage}
            risePercentage={barItem.risePercentage}
          />
        ))}
      </div>
      <div className="bars-line" style={{ bottom: barsLinePercentage }} />
    </div>
  )
}
