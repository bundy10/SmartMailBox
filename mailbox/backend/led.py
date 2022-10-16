import RPi.GPIO as GPIO

import threading, time

import logging

from picamera import PiCamera

from time import sleep


logging.basicConfig(level=logging.DEBUG)

GPIO.setmode(GPIO.BCM)

class LED:
	
	channel = 0

	def __init__(self, channel):
		
		self.channel = channel

		GPIO.setup(self.channel, GPIO.OUT)

	def on(self):
		
		GPIO.output(self.channel, GPIO.HIGH)

		return "on"

	def off(self):

		GPIO.output(self.channel, GPIO.LOW)

		return "off"


class Switch:

	def triggered():






class Camera:

	def TakePhoto():

		GPIO.setup(10, GPIO.OUT)
		camera.start_preview() #turn camera on
		GPIO.output(10, GPIO.HIGH)
		sleep(5) #give it time to adjust to light level
		camera.capture('/home/pi/Desktop/image.jpg')
		camera.stop_preview()
		GPIO.output(10, GPIO.LOW)

		