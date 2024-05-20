from fastapi import FastAPI
from pymongo import MongoClient
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from pydantic import BaseModel
from typing import Dict, List
import json

# MongoDB connection
client = MongoClient("mongodb+srv://salhisamar2024:12345samar1@cluster0.0xwm6bp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client.get_database('test')
infoIot = db.infoIot
climatiseurIot = db.climatiseurIot

class PredictionResponse(BaseModel):
    series: Dict[str, List[float]]

def predict():
    cursor = climatiseurIot.find({})
    climatiseurIot_df = pd.DataFrame(list(cursor))
    
    cursor = infoIot.find({})
    infoIot_df = pd.DataFrame(list(cursor))
    
    series_to_predict_info = ['flameData', 'temperatureData']
    series_to_predict_temp = ['Vab', 'Vbc', 'Vca']
    
    predictions_dict = {}
    
    for series in series_to_predict_info:
        if series in infoIot_df:
            model = ARIMA(infoIot_df[series], order=(2, 1, 2))
            fit_model = model.fit()
            predictions = fit_model.predict(start=len(infoIot_df), end=len(infoIot_df) + 10 - 1)
            predictions_dict[series] = predictions.tolist()
    
    for series in series_to_predict_temp:
        if series in climatiseurIot_df:
            model = ARIMA(climatiseurIot_df[series], order=(2, 1, 2))
            fit_model = model.fit()
            predictions = fit_model.predict(start=len(climatiseurIot_df), end=len(climatiseurIot_df) + 10 - 1)
            predictions_dict[series] = predictions.tolist()
    
    return {"series": predictions_dict}

if __name__ == "__main__":
    predictions = predict()
    print(json.dumps(predictions))
