from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Float

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(256), nullable=False)
    last_name = db.Column(db.String(256), nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)
    bookmarks = db.relationship("Bookmark", back_populates="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class City(db.Model):
    __tablename__ = "city"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), unique=False, nullable=False)
    population = db.Column(db.Integer, unique=False, nullable=False)
    temperature_range = db.Column(db.String(256), unique=False, nullable=False)
    inclement_weather = db.Column(db.String(256), unique=False, nullable=False)
    avg_cost_of_living = db.Column(db.String(256), unique=False, nullable=False)
    avg_annual_income = db.Column(db.String(256), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "population": self.population,
            "temperature_range": self.temperature_range,
            "inclement_weather": self.inclement_weather,
            "avg_cost_of_living": self.avg_cost_of_living,
            "avg_annual_income": self.avg_annual_income,
            

            
            # do not serialize the password, its a security breach
        }

class State(db.Model):
    __tablename__ = "state"
    id = db.Column(db.Integer, primary_key=True)
    

class Bookmark(db.Model):
    __tablename__ = "bookmark"
    id = db.Column(db.Integer, primary_key=True)
    city_name = db.Column(db.Integer, db.ForeignKey("city.id"))
    user_id = db.Column(db.ForeignKey("user.id"))
    user = db.relationship("User", back_populates="bookmarks")