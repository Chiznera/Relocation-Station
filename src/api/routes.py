"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, City
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests



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
    resp2 = requests.get(
        'https://3001-chiznera-relocationstat-ztly2rvjwxf.ws-us59.gitpod.io/api/city'
    ).json()
    return jsonify(cities = resp2, civilserviceusa = resp)

@api.route('/states/<string:state>', methods=['GET'])
def get_state(state):
    resp = requests.get(
        'https://civilserviceusa.github.io/us-states/data/states.json'
    ).json()
    resp2 = requests.get(
        'https://3001-chiznera-relocationstat-ztly2rvjwxf.ws-us59.gitpod.io/api/city'
    ).json()
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

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

   
   
   
@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():

    dictionary  = {
        "message": "Hello World"
    }
    
    return jsonify(dictionary)


    return jsonify(response_body), 200