"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, City, Bookmark
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests
import datetime



#Create flask app
api = Blueprint('api', __name__)



@api.route('/signup', methods=['POST'])
def handle_signup():
    body = request.json # get the request body content
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    password = request.json.get('password')
    print(email, first_name, last_name, password)
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter an first_name',400
    if not last_name:
        return 'You need to enter an last_name',400
    if not password:
        return 'You need to enter a password', 400

    # check_user = User.query.filter_by(email=email)
    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    user = User(email=email, first_name=first_name, last_name=last_name, password=password, is_active=True)

    db.session.add(user)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200

@api.route('/users', methods=['GET'])
def get_all_users():
    users=User.query.all()
    users_array=[user.serialize() for user in users]
    return jsonify(users_array), 200


@api.route('/states', methods=['GET'])
def forward_resp():
    resp = requests.get(
        'https://civilserviceusa.github.io/us-states/data/states.json'
    ).json()

    citySet = City.query.all()
    serialized_cities = [item.serialize() for item in citySet]
    
    return jsonify(cities = serialized_cities, civilserviceusa = resp)

@api.route('/states/<string:state>', methods=['GET'])
def get_state(state):
    resp = requests.get(
        'https://civilserviceusa.github.io/us-states/data/states.json'
    ).json()
    
    citySet = City.query.all()
    resp2 = [item.serialize() for item in citySet]

    state_info={}
    for i in range(len(resp)):
        if resp[i]["code"] == state:
            state_info=resp[i]
    cities=[]
    for i in range(len(resp2)):
        if resp2[i]["code"] == state:
            cities.append(resp2[i])
    state_info["cities"]=cities
    return jsonify(state_info),200

@api.route("/city", methods=['GET'])
def getCities():
    city = City.query.all()
    serialized_city = [item.serialize() for item in city]
    return jsonify(serialized_city), 200







# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # if email != "test" or password != "test":
    #     return jsonify({"msg": "Bad email or password"}), 401
    user = User.query.filter_by(email=email, password=password).first()
    if not user :
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=user.id, expires_delta=datetime.timedelta(minutes=60))    
    return jsonify(access_token=access_token)

   
   
   
@api.route("/favorites", methods=["POST"])
@jwt_required()
def addFavorites():
    user = User.query.filter_by(id=get_jwt_identity()).first()
    print(user)
    body = request.get_json()
    print(body)
    favorite=Bookmark(user_id=user.id, state_name=body["state"])
    db.session.add(favorite)
    db.session.commit()
    favorites=Bookmark.query.filter_by(user_id=user.id)
    favorite_list=[favorite.serialize()for favorite in favorites]
    return jsonify(favorite_list)
