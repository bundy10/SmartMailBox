from flask import Flask
from flask import request

from led import LED

app = Flask(__name__)

@app.route('/', methods=['POST'])
def main():
	
	action = request.values['action']

	led = LED(17)

	if action == 'on':
		led.on()

	if action == 'off':
		led.off()

	return 'success'

