
import RPi.GPIO as GPIO
import threading, time
from picamera import PiCamera
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


camera = PiCamera()
def takePicture():
    
    camera.start_preview()
    time.sleep(3)
    camera.capture('/home/mailbox/Pictures/image.jpg')
    camera.stop_preview()
    
    #SEND PICTURE TO APP/WEBPAGE

GPIO.setmode(GPIO.BCM)


#Pin assignments
#Do not attempt to change unless neccesary
solenoid = 2
Bled = 5
flashes = 3
doorswitch = 21
Yled = 10
button = 8

#GPIO Wizardry used to tie up/down a resistor internal to the pi
#Must be used on IN for any chance at non-floating data
#GPIO.setup(16,GPIO.IN, pull_up_down=GPIO.PUD_DOWN)


#Setting up pin modes
GPIO.setup(solenoid, GPIO.OUT)
GPIO.setup(Bled, GPIO.OUT)
GPIO.setup(flashes, GPIO.OUT)
GPIO.setup(Yled, GPIO.OUT)
GPIO.setup(button, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(doorswitch, GPIO.IN, pull_up_down=GPIO.PUD_UP)

#Pre-Cleanup (Some I/O states stick around far longer than they should)
GPIO.output(Yled, GPIO.LOW)
GPIO.output(Bled, GPIO.LOW)
GPIO.output(solenoid, GPIO.HIGH)
GPIO.output(flashes, GPIO.LOW)


running = 1
state = 1

def getunlock() :
    state = 2


while(running):
    if state == 1:
        #state waiting for delivery
        while state == 1:
            if GPIO.input(button) == 0:
                GPIO.output(Yled, GPIO.HIGH)
                time.sleep(4)#NOTE THIS IS A DUMMY FOR RECEIVING APPROVAL FROM THE APP
                
                state=2
                
                break

    elif state == 2: 
        #state waiting for user to unlock
        GPIO.output(Yled, GPIO.LOW)
        GPIO.output(Bled, GPIO.HIGH)
        GPIO.output(solenoid, GPIO.LOW)
        while state == 2:
            if GPIO.input(doorswitch) == 1:
                state = 3
                break
    elif state == 3:
        #state while door is open 
        GPIO.output(Bled, GPIO.LOW)
        while state == 3:
            print("door open")
            if GPIO.input(doorswitch) == 0:
                state = 4
                break
    elif state==4:
        #state triggered by door closing
        #takes photo
        print("locked")
        GPIO.output(solenoid, GPIO.HIGH)
        GPIO.output(flashes, GPIO.HIGH)
        takePicture()
        time.sleep(3)
        
        GPIO.output(flashes, GPIO.LOW)
        state=1

#Only uncomment this if things seem broken for no reason, run through once and re-comment
#GPIO.cleanup()

