from app import app
import json
from api.models import City, db


with app.app_context(): 
    cities = []
    with open("./src/data/cities.json", "rt") as cityfile: 
        cities = json.loads(cityfile.read())
    cities = [City(**city) for city in cities]
    db.session.add_all(cities)
    db.session.commit()

    