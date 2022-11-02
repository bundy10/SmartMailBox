from crypt import methods
import json
from tkinter import SW
from flask import Flask
from flask import request

from led import LED, Switch

app = Flask(__name__)

@app.route('/', methods=['POST'])
def main():
	
	action = request.values['action']

	led = LED(5)

	if action == 'on':
		led.on()

	if action == 'off':
		led.off()

	return 'success'

@app.route('/switch', methods=['GET'])
def button():

	button = Switch(8)
	switchStatus = str(button.isTriggered())

	response = app.response_class(
        response={switchStatus},
        status=200,
        mimetype='application/json'
	)
	return response
