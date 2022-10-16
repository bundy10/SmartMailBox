from curses import flash
from led import *
import RPi.GPIO as GPIO
import threading, time
import logging
from picamera import PiCamera
from time import sleep

running = True
solenoid = 2
Bled = 17
flashes = 10
doorswitch = 24
Yled = 3
button = 25

GPIO.setup(solenoid, GPIO.OUT)
GPIO.setup(Bled, GPIO.OUT)
GPIO.setup(doorswitch, GPIO.OUT)
GPIO.setup(flashes, GPIO.OUT)
GPIO.setup(Yled, GPIO.OUT)
GPIO.setup(button, GPIO.OUT)


def control():

    GPIO.output(Yled, GPIO.HIGH)
    #send notification to react
    
    if GPIO.output(Yled, GPIO.LOW): # from react 
        time.sleep(3)
        GPIO.output(Bled, GPIO.HIGH)
        GPIO.output(solenoid, GPIO.LOW)

    if GPIO.output(doorswitch, GPIO.HIGH):
        time.sleep(5)
        GPIO.output(solenoid, GPIO.HIGH)
        GPIO.output(Bled, GPIO.LOW)
        time.sleep(5)
        Camera.TakePhoto


def main():
    while running:
        if GPIO.output(button, GPIO.HIGH):
            control()


main()

GPIO.cleanup()