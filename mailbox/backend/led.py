import RPi.GPIO as GPIO

import threading, time

import logging

logging.basicConfig(level=logging.DEBUG)

class LED:
	
	channel = 0

	def __init__(self, channel):
		
		self.channel = channel

		GPIO.setmode(GPIO.BCM)

		GPIO.setup(self.channel, GPIO.OUT)

	def on(self):
		
		GPIO.output(self.channel, GPIO.HIGH)

		return "on"

	def off(self):

		GPIO.output(self.channel, GPIO.LOW)

		return "off"


