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
    favorites = relationship("Favorites")

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

class State(db.Model):
    __tablename__ = "state"
    id = db.Column(db.Integer, primary_key=True)
    

class Favorites(db.Model):
    __tablename__ = "favorites"
    id = db.Column(db.String(256), primary_key=True)
    user_id = Column(db.Integer, ForeignKey("user.id"))
    state_id = db.Column(db.Integer, ForeignKey("state.id"))