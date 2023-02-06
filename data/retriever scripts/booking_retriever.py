import boto3
import API_pull
import pandas as pd


def populateBookingData():
    bookingData = pd.DataFrame()
    
    # defines a list every month from 2018 till 2022
    dates = ["2018-02-01", "2018-03-01", "2018-04-01", "2018-05-01", "2018-06-01",
            "2018-07-01", "2018-08-01", "2018-09-01", "2018-10-01", "2018-11-01", "2018-12-01",
            "2019-01-01", "2019-02-01", "2019-03-01", "2019-04-01", "2019-05-01", "2019-06-01",
            "2019-07-01", "2019-08-01", "2019-09-01", "2019-10-01", "2019-11-01", "2019-12-01",
            "2020-01-01", "2020-02-01", "2020-03-01", "2020-04-01", "2020-05-01", "2020-06-01",
            "2020-07-01", "2020-08-01", "2020-09-01", "2020-10-01", "2020-11-01", "2020-12-01",
            "2021-01-01", "2021-02-01", "2021-03-01", "2021-04-01", "2021-05-01", "2021-06-01",
            "2021-07-01", "2021-08-01", "2021-09-01", "2021-10-01", "2021-11-01", "2021-12-01",
            "2022-01-01", "2022-02-01", "2022-03-01", "2022-04-01", "2022-05-01", "2022-06-01",
            "2022-07-01", "2022-08-01", "2022-09-01", "2022-10-01", "2022-11-01", "2022-12-01",
            "2023-01-01", "2023-02-01"] 
    
    for i in range(1, len(dates)):
        data = API_pull.getBookingData(dates[i-1], dates[i])
        bookingData = pd.concat([bookingData, data])

    bookingData.to_csv('booking_data_test.csv', index=False, mode='a', header=False)



    
