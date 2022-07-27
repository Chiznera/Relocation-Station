"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import requests
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests


#Create flask app
api = Blueprint('api', __name__)


@api.route('/statedata', methods=['GET'])
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
    return jsonify(civilserviceusa = resp, rapidapi = resp2)



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