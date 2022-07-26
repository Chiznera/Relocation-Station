from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#class States(db.Model):
    # id = db.Model(db.Integer, primary_key=True)
    # name = db.Column(db.String(120))
    # population = db.Column(db.String(256))
    # capital = db.Column(db.String(256))


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), unique=False, nullable=False)
    population = db.Column(db.Integer, unique=False, nullable=False)
    temperature_range = db.Column(db.String(256), unique=False, nullable=False)
    inclement_weather = db.Column(db.String(256), unique=False, nullable=False)
    avg_cost_of_living = db.Column(db.String(256), unique=False, nullable=False)

class Favorites(db.Model):
    id = db.Column(db.String(256), unique=False, nullable=False)