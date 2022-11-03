from crypt import methods
import json
from tkinter import SW
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

from led import LED, Switch

app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods=['POST'])
def main():
	
	action = request.values['action']

	led = LED(2)

	if action == 'on':
		led.on()

	if action == 'off':
		led.off()

	return 'success'

@app.route('/switch', methods=['GET'])
def button():

	button = Switch(8)
	switchStatus = str(button.isTriggered())


	return switchStatus
