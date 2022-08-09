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