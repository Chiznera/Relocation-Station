"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import requests

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


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200