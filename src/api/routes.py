"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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


@api.route('/states', methods=['GET'])
def forward_resp():
    headers = {
	"X-RapidAPI-Key": "e88c60b623msh923065c118c6201p1f5494jsn1a3edbc8720f",
	"X-RapidAPI-Host": "us-states.p.rapidapi.com"
    }
    resp = requests.get(
        'https://us-states.p.rapidapi.com/basic',
        headers=headers

    ).json()    
    resp2 = requests.get(
        'https://civilserviceusa.github.io/us-states/data/states.json'
    ).json()
    return jsonify(rapidapi = resp, civilserviceusa = resp2)

@api.route('/states/<string:state>', methods=['GET'])
def get_state(state):
    # headers = {
	# "X-RapidAPI-Key": "e88c60b623msh923065c118c6201p1f5494jsn1a3edbc8720f",
	# "X-RapidAPI-Host": "us-states.p.rapidapi.com"
    # }
    # resp = requests.get(
    #     'https://us-states.p.rapidapi.com/basic',
    #     headers=headers

    # ).json()    
    resp = requests.get(
        'https://civilserviceusa.github.io/us-states/data/states.json'
    ).json()
    # rapidapiState = list(filter(lambda x: state.lower() == x["postal"].lower(), resp))
    civilserviceusaState = list(filter(lambda x: state.lower() == x["code"].lower(), resp))
    return jsonify(civilserviceusa = civilserviceusaState.pop())





# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

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