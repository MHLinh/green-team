Green Team Project

API information

Websocket url: 
```
wss://50heid0mqj.execute-api.eu-west-1.amazonaws.com/production
```

<details>
  <summary>1. airlineMostDelays</summary>

  - Returns the top n airlines with a highest total delay in a specific time range.
  - Suggested graphs: ???
  - Example message: 
  ```
  {"action": "airlineMostDelays", "startDate": "2022-10-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Airline with most total delay in time period",
                "Total delay time (mins)"
            ],
            [
                "EZY",
                25618.0
            ]
        ],
        "month": [
            [
                "Month",
                "Airline",
                "Total delay time in month (mins)"
            ],
            [
                "2022-12",
                "EZY",
                25618.0
            ],
            [
                "2022-12",
                "FR",
                19777.0
            ],
            ...
        ]
    },
    "inbound": {
        "total": [
            [
                "Airline with most total delay in time period",
                "Total delay time (mins)"
            ],
            [
                "EZY",
                16207.0
            ]
        ],
        "month": [
            [
                "Month",
                "Airline",
                "Total delay time in month (mins)"
            ],
            [
                "2022-12",
                "EZY",
                16207.0
            ],
            [
                "2022-12",
                "FR",
                14616.0
            ],
            ...
        ]
    }
 }
  ```
</details>

<details>
  <summary>2. averageDailyFlights</summary>
  
  - Returns the average number of flights per day per airline in a time period
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "averageDailyFlights", "startDate": "2022-10-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Average daily outbound flights among all months"
            ],
            [
                79.77
            ]
        ],
        "month": [
            [
                "Month",
                "Average daily outbound flights"
            ],
            [
                [
                    "2022-10",
                    103.55
                ],
                [
                    "2022-11",
                    66.07
                ],
                [
                    "2022-12",
                    69.71
                ]
            ]
        ]
    },
    "inbound:": {
        "total": [
            [
                "Average daily inbound flights among all months"
            ],
            [
                79.94
            ]
        ],
        "month": [
            [
                "Month",
                "Average daily inbound flights"
            ],
            [
                [
                    "2022-10",
                    103.74
                ],
                [
                    "2022-11",
                    66.13
                ],
                [
                    "2022-12",
                    69.94
                ]
            ]
        ]
    }
 }
  ```
</details>

<details>
  <summary>3. averageDelayDaily</summary>

  - Returns the average number flight delay in a time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "averageDelayDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Average delay of outbound flights over time period (in minutes)"
            ],
            [
                29.76
            ]
        ],
        "Date": [
            [
                "Date",
                "Average delay of outbound flights on a given date (in minutes)"
            ],
            [
                [
                    "2022-12-01",
                    23.55
                ],
                [
                    "2022-12-02",
                    32.49
                ],
                [
                    "2022-12-03",
                    15.18
                ],
                ...
            ]
        ]
    },
    "inbound": {
        "total": [
            [
                "Average delay of inbound flights over time period (in minutes)"
            ],
            [
                21.83
            ]
        ],
        "Date": [
            [
                "Date",
                "Average delay of inbound flights on a given date (in minutes)"
            ],
            [
                [
                    "2022-12-01",
                    27.04
                ],
                [
                    "2022-12-02",
                    15.9
                ],
                [
                    "2022-12-03",
                    4.38
                ],
                ...
            ]
        ]
    }
  }
  ```
</details>

<details>
  <summary>4. averageDelayMonthly</summary>

  - Returns average monthly delay in time period.
  - Suggested graphs: Bar chart
  - Example message: 
  ```
  {"action": "averageDelayMonthly", "startDate": "2022-10-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Total average delay of outbound flights over time period (minutes)"
            ],
            [
                25.72
            ]
        ],
        "month": [
            [
                "Month",
                "Average delay of outbound flights in month"
            ],
            [
                [
                    "2022-10",
                    1.3693
                ],
                [
                    "2022-11",
                    0.6157
                ],
                [
                    "2022-12",
                    2.3658
                ]
            ]
        ]
    },
    "inbound": {
        "total": [
            [
                "Total average delay of inbound flights over time period (minutes)"
            ],
            [
                17.82
            ]
        ],
        "month": [
            [
                "Month",
                "Average delay of inbound flights in month"
            ],
            [
                [
                    "2022-10",
                    5.9456
                ],
                [
                    "2022-11",
                    7.6164
                ],
                [
                    "2022-12",
                    7.2016
                ]
            ]
        ]
    }
  }
  ```
</details>

<details>
  <summary>5. averageKeysDaily</summary>

  - Returns average daily number of keys over a given time period.
  - Example message: 
  ```
  {"action": "averageKeysDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "total": [
        [
            "Average total keys among all dates"
        ],
        [
            5.61373
        ]
    ],
    "month": [
        [
            "Date",
            "Average total keys"
        ],
        [
            [
                "2022-12-02",
                6.97
            ],
            [
                "2022-12-03",
                6.71
            ],
            ...
        ]
    ]
  }
  ```
</details>

<details>
  <summary>6. averageKeysMonthly</summary>

  - Returns average monthly number of keys over a given time period.
  - Example message: 
  ```
  {"action": "averageKeysMonthly", "startDate": "2022-10-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "total": [
        [
            "Average total keys among all months"
        ],
        [
            6.8386
        ]
    ],
    "month": [
        [
            "Month",
            "Average total keys"
        ],
        [
            [
                "2022-10",
                8.41
            ],
            [
                "2022-11",
                6.39
            ],
            [
                "2022-12",
                5.72
            ]
        ]
    ]
  }
  ```
</details>

<details>
  <summary>7. bookingMetricsDaily</summary>
  
  - Returns total number bookings made, bookings started, bookings ended, bookings started and ended in a given time period.
  - Returns the number bookings made, bookings started, bookings ended on a given date in a given time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "bookingMetricsDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "total": [
        [
            "Total bookings made in time period",
            "Total bookings started in time period",
            "Total bookings ended in time period",
            "Total bookings started and ended in time period"
        ],
        [
            10857,
            15953,
            12522,
            9910
        ]
    ],
    "dates": [
        [
            "Date",
            "Bookings made on a given date",
            "Bookings started on a given date",
            "Bookings ended on a given date"
        ],
        [
            "2022-12-01",
            286,
            0,
            316
        ],
        [
            "2022-12-02",
            269,
            398,
            535
        ],
        [
            "2022-12-03",
            254,
            411,
            409
        ],
        ...
    ]
  }
  ```
</details>

<details>
  <summary>8. bookingMetricsMonthly</summary>
  
  
  - Returns total number bookings made, bookings started, bookings ended, bookings started and ended in a given time period.
  - Returns the number bookings made, bookings started, bookings ended, bookings started and ended in a given month in a given time period.
  - Suggested graphs: Bar chart
  - Example message: 
  ```
  {"action": "bookingMetricsMonthly", "startDate": "2022-06-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
 {
    "total": [
        [
            "Total bookings made in time period",
            "Total bookings started in time period",
            "Total bookings ended in time period",
            "Total bookings started and ended in time period"
        ],
        [
            183005,
            227460,
            233351,
            221380
        ]
    ],
    "months": [
        [
            "Month",
            "Bookings made in given month",
            "Bookings started in given month",
            "Bookings ended in a given month",
            "Bookings started and ended in given month"
        ],
        [
            "2022-06",
            39267,
            47339,
            45789,
            33903
        ],
        [
            "2022-07",
            32518,
            36951,
            38935,
            25492
        ],
        [
            "2022-08",
            37207,
            38653,
            38199,
            27360
        ],
        ...
    ]
  }
  ```
</details>

<details>
  <summary>9. busiestDaysValet</summary>

  - Returns daily total number of keys pulled and in a given time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "busiestDaysValet", "startDate": "2022-12-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "pulled": {
        "total": [
            [
                "Total pulled keys among all dates"
            ],
            [
                6063.0
            ]
        ],
        "month": [
            [
                "Date",
                "Total pulled keys"
            ],
            [
                [
                    "2022-12-02",
                    304.0
                ],
                [
                    "2022-12-03",
                    320.0
                ],
                ...
            ]
        ]
    },
    "blocked": {
        "total": [
            [
                "Total blocked keys among all dates"
            ],
            [
                11404.0
            ]
        ],
        "month": [
            [
                "Date",
                "Total blocked keys"
            ],
            [
                [
                    "2022-12-02",
                    414.0
                ],
                [
                    "2022-12-03",
                    411.0
                ],
                ...
            ]
        ]
    }
  }
  ```
</details>

<details>
  <summary>10. busiestMonthsValet</summary>

  - Returns monthly total number of keys pulled and in a given time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "busiestMonthsValet", "startDate": "2022-10-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "pulled": {
        "total": [
            [
                "Total keys among all months"
            ],
            [
                47485.0
            ]
        ],
        "month": [
            [
                "Month",
                "Total keys"
            ],
            [
                [
                    "2022-10",
                    29925.0
                ],
                [
                    "2022-11",
                    11497.0
                ],
                [
                    "2022-12",
                    6063.0
                ]
            ]
        ]
    },
    "blocked": {
        "total": [
            [
                "Total keys among all months"
            ],
            [
                47485.0
            ]
        ],
        "month": [
            [
                "Month",
                "Total keys"
            ],
            [
                [
                    "2022-10",
                    29925.0
                ],
                [
                    "2022-11",
                    11497.0
                ],
                [
                    "2022-12",
                    6063.0
                ]
            ]
        ]
    }
  }
  ```
</details>

<details>
  <summary>11. cancellationDaily</summary>
  
  - Returns total number and rate of cancelled bookings made, bookings started, bookings ended, bookings started and ended in a given time period.
  - Returns the number and rate of cancelled bookings made, bookings started, bookings ended on a given date in a given time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "cancellationDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "totalCancelled": [
        [
            "Total cancelled bookings made in time period",
            "Total cancelled bookings started in time period",
            "Total cancelled bookings ended in time period",
            "Total cancelled bookings started and ended in time period"
        ],
        [
            476,
            990,
            806,
            627
        ]
    ],
    "totalRates": [
        [
            "Rate of total cancelled bookings made in time period",
            "Rate of total cancelled bookings started in time period",
            "Rate of total cancelled bookings ended in time period",
            "Rate of total cancelled bookings started and ended in time period"
        ],
        [
            0.044,
            0.062,
            0.064,
            0.063
        ]
    ],
    "datesCancelled": [
        [
            "Date",
            "Cancelled bookings made on a given date",
            "Cancelled bookings started on a given date",
            "Cancelled bookings ended on a given date"
        ],
        [
            "2022-12-01",
            11,
            0,
            21
        ],
        [
            "2022-12-02",
            18,
            15,
            27
        ],
        [
            "2022-12-03",
            10,
            23,
            16
        ],
        ...
    ],
    "datesRates": [
        [
            "Date",
            "Rate of cancelled bookings made on a given date",
            "Rate of cancelled bookings started on a given date",
            "Rate of cancelled bookings ended on a given date"
        ],
        [
            "2022-12-01",
            0.038,
            0,
            0.066
        ],
        [
            "2022-12-02",
            0.067,
            0.038,
            0.05
        ],
        [
            "2022-12-03",
            0.039,
            0.056,
            0.039
        ],
        ...
    ]
  }
  ```
</details>

<details>
  <summary>12. cancellationMonthly</summary>
  
  - Returns total number and rate of cancelled bookings made, bookings started, bookings ended, bookings started and ended in a given time period.
  - Returns the number and rate of cancelled bookings made, bookings started, bookings ended, bookings started and ended in a given month in a given time period.
  - Suggested graphs: Bar chart
  - Example message: 
  ```
  {"action": "cancellationMonthly", "startDate": "2022-06-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "totalCancelled": [
        [
            "Total cancelled bookings made in time period",
            "Total cancelled bookings started in time period",
            "Total cancelled bookings ended in time period",
            "Total cancelled bookings started and ended in time period"
        ],
        [
            9469,
            15777,
            16159,
            15411
        ]
    ],
    "totalRates": [
        [
            "Rate of total cancelled bookings made in time period",
            "Rate of total cancelled bookings started in time period",
            "Rate of total cancelled bookings ended in time period",
            "Rate of total cancelled bookings started and ended in time period"
        ],
        [
            0.052,
            0.069,
            0.069,
            0.07
        ]
    ],
    "monthsCancelled": [
        [
            "Month",
            "Cancelled bookings made in given month",
            "Cancelled bookings started in given month",
            "Cancelled bookings ended in given month",
            "Cancelled bookings started and ended in given month"
        ],
        [
            "2022-06",
            2684,
            3615,
            3362,
            2618
        ],
        [
            "2022-07",
            1653,
            3074,
            3160,
            2163
        ],
        [
            "2022-08",
            1748,
            2474,
            2658,
            1748
        ],
        ...
    ],
    "monthsRates": [
        [
            "Month",
            "Rate of cancelled bookings made in given month",
            "Rate of cancelled bookings started in given month",
            "Rate of cancelled bookings ended in given month",
            "Rate of cancelled bookings started and ended in given month"
        ],
        [
            "2022-06",
            0.068,
            0.076,
            0.073,
            0.077
        ],
        [
            "2022-07",
            0.051,
            0.083,
            0.081,
            0.085
        ],
        [
            "2022-08",
            0.047,
            0.064,
            0.07,
            0.064
        ],
        ...
    ]
  }
  ```
</details>

<details>
  <summary>13. inAdvanceDaily</summary>
  
  - Returns daily average number of days in advance bookings are made for bookings made and bookings started in given time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "inAdvanceDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "inAdvanceAverage": [
        [
            "Average number of days booked in advance for bookings made in given time range",
            "Average number of days booked in advance for bookings started in given time range"
        ],
        [
            26.14,
            38.01
        ]
    ],
    "datesInAdvanceAverage": [
        [
            "Date",
            "Average number of days booked in advance for bookings made on a given date",
            "Average number of days booked in advance for bookings started on a given date"
        ],
        [
            "2022-06-01",
            29.29,
            0
        ],
        [
            "2022-06-02",
            24.39,
            42.15
        ],
        [
            "2022-06-03",
            27.27,
            33.34
        ],
        ...
      ]
  }
  ```
</details>

 <details>
  <summary>14. inAdvanceMonthly</summary>
    
  - Returns monthly average number of days in advance bookings are made for bookings made and bookings started in given time period.
  - Suggested graphs: Bar chart
  - Example message: 
  ```
  {"action": "inAdvanceMonthly", "startDate": "2022-06-01T00:00:00", "endDate": "2022-12-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "inAdvanceAverage": [
        [
            "Average number of days booked in advance for bookings made in given time range",
            "Average number of days booked in advance for bookings started in given time range"
        ],
        [
            22.87,
            40.25
        ]
    ],
    "monthsInAdvanceAverage": [
        [
            "Month",
            "Average number of days booked in advance for bookings made in a given month",
            "Average number of days booked in advance for bookings started in a given month"
        ],
        [
            "2022-06",
            26.14,
            38.01
        ],
        [
            "2022-07",
            26.19,
            40.69
        ],
        [
            "2022-08",
            23.18,
            43.0
        ],
        ...
    ]
  }
  ```
</details>

<details>
  <summary>15. mostVisitedDestinations</summary>
</details>

<details>
  <summary>16. stayDaily</summary>
  
  - Returns a distribution of stay durations and average for bookings made and bookings started in a given time range.
  - Returns daily average stay durations for bookings made and bookings started in a given time range.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "stayDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2023-01-01T00:00:00"}
  ```
  - Example response:
  ```
  {
    "stayDistributionMade": [
        [
            "Stay duration in days",
            "Number of occurences"
        ],
        [
            0,
            21
        ],
        [
            1,
            8
        ],
        [
            2,
            361
        ],
        ...
    ],
    "stayDistributionStart": [
        [
            "Stay duration in days",
            "Number of occurences"
        ],
        [
            0,
            30
        ],
        [
            1,
            18
        ],
        [
            2,
            450
        ],
        ...
    ],
    "stayAverage": [
        [
            "Average stay of bookings made in time period",
            "Average stay of bookings started in time period"
        ],
        [
            7.43,
            7.88
        ]
    ],
    "dailyStayAverage": [
        [
            "Date",
            "Average stay of bookings made on a given date (in days)",
            "Average stay of bookings started on a given date (in days)"
        ],
        [
            "2022-12-01",
            6.94,
            0
        ],
        [
            "2022-12-02",
            8.22,
            5.74
        ],
        [
            "2022-12-03",
            7.31,
            7.5
        ],
        ...
    ]
  }
  ```
</details>

<details>
  <summary>17. stayMonthly</summary>
  
  - Returns a distribution of stay durations and average for bookings made and bookings started in a given time range.
  - Returns daily average stay durations for bookings made and bookings started in a given time range.
  - Suggested graphs: Bar chart
  - Example message: 
  ```
  {"action": "stayMonthly", "startDate": "2022-06-01T00:00:00", "endDate": "2023-01-31T23:59:59"}
  ```
  - Example response:
  ```
  {
    "stayDistributionMade": [
        [
            "Stay duration in days",
            "Number of occurences"
        ],
        [
            0,
            372
        ],
        [
            1,
            135
        ],
        [
            2,
            5652
        ],
        ...
    ],
    "stayDistributionStart": [
        [
            "Stay duration in days",
            "Number of occurences"
        ],
        [
            0,
            522
        ],
        [
            1,
            156
        ],
        [
            2,
            5782
        ],
        ...
    ],
    "stayAverage": [
        [
            "Average stay of bookings made in time period",
            "Average stay of bookings started in time period"
        ],
        [
            8.21,
            8.66
        ]
    ],
    "monthsStayAverage": [
        [
            "Month",
            "Average stay of bookings made in a given month (in days)",
            "Average stay of bookings started in a given month (in days)",
            "Average stay of bookings started and ended in a given month (in days)"
        ],
        [
            "2022-06",
            8.85,
            9.16,
            7.33
        ],
        [
            "2022-07",
            9.38,
            9.71,
            7.58
        ],
        [
            "2022-08",
            8.5,
            9.37,
            7.87
        ],
        ...
    ]
}
  ```
</details>

<details>
  <summary>18. totalDelayDaily</summary>

  - Returns the total daily delay in a time period.
  - Suggested graphs: Bar chart, Calendar heat map
  - Example message: 
  ```
  {"action": "totalDelayDaily", "startDate": "2022-12-01T00:00:00", "endDate": "2023-01-01T00:00:00"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Total delay of outbound flights over time period (in minutes)"
            ],
            [
                922.57
            ]
        ],
        "Date": [
            [
                "Date",
                "Total delay of outbound flights on given date (in minutes)"
            ],
            [
                [
                    "2022-12-01",
                    23.55
                ],
                [
                    "2022-12-02",
                    32.49
                ],
                [
                    "2022-12-03",
                    15.18
                ],
                ...
            ]
        ]
    },
    "inbound": {
        "total": [
            [
                "Total delay of inbound flights over time period (in minutes)"
            ],
            [
                676.62
            ]
        ],
        "Date": [
            [
                "Date",
                "Total delay of inbound flights on given date (in minutes)"
            ],
            [
                [
                    "2022-12-01",
                    27.04
                ],
                [
                    "2022-12-02",
                    15.9
                ],
                [
                    "2022-12-03",
                    4.38
                ],
                ...
            ]
        ]
    }
  }
  ```
</details>

<details>
  <summary>19. totalDelayMonthly</summary>

  - Returns total monthly delay in a time period.
  - Suggested graphs: Bar chart
  - Example message: 
  ```
  {"action": "totalDelayMonthly", "startDate": "2022-10-01T00:00:00", "endDate": "2023-01-01T00:00:00"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Total delay of outbound flights over time period (in minutes)"
            ],
            [
                922.57
            ]
        ],
        "Date": [
            [
                "Date",
                "Total delay of outbound flights on given date (in minutes)"
            ],
            [
                [
                    "2022-12-01",
                    23.55
                ],
                [
                    "2022-12-02",
                    32.49
                ],
                [
                    "2022-12-03",
                    15.18
                ],
                ...
            ]
        ]
    },
    "inbound": {
        "total": [
            [
                "Total delay of inbound flights over time period (in minutes)"
            ],
            [
                676.62
            ]
        ],
        "Date": [
            [
                "Date",
                "Total delay of inbound flights on given date (in minutes)"
            ],
            [
                [
                    "2022-12-01",
                    27.04
                ],
                [
                    "2022-12-02",
                    15.9
                ],
                [
                    "2022-12-03",
                    4.38
                ],
                ...
            ]
        ]
    }
  }
  ```
</details>

<details>
  <summary>20. totalFlightsAirline</summary>

  - Returns total number of flights per airline (departing or arriving).
  - Suggested graphs: ???
  - Example message: 
  ```
  {"action": "totalFlightsAirline", "startDate": "2022-12-01T00:00:00", "endDate": "2023-01-01T00:00:00"}
  ```
  - Example response:
  ```
  {
    "outbound": {
        "total": [
            [
                "Total flights among all months"
            ],
            [
                2161.0
            ]
        ],
        "month": [
            [
                "Month",
                "Airline",
                "Total monthly flights"
            ],
            [
                [
                    "2022-12",
                    "EZY",
                    1062.0
                ],
                [
                    "2022-12",
                    "FR",
                    412.0
                ],
                [
                    "2022-12",
                    "LS",
                    91.0
                ],
                ...
            ]
        ]
    },
    "inbound": {
        "total": [
            [
                "Total flights among all months"
            ],
            [
                2168.0
            ]
        ],
        "month": [
            [
                "Month",
                "Airline",
                "Total monthly flights"
            ],
            [
                [
                    "2022-12",
                    "EZY",
                    1062.0
                ],
                [
                    "2022-12",
                    "FR",
                    417.0
                ],
                [
                    "2022-12",
                    "LS",
                    91.0
                ],
                ...
            ]
        ]
    }
 }
  ```
</details>
