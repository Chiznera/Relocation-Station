from app import app
import json
from api.models import City


with app.app_context(): 
    cities = [city.serialize() for city in City.query.all()]
    with open("./src/data/cities.json", "wt") as cityfile: 
        cityfile.write(json.dumps(cities))