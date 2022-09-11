## About

Connect raspberry pi with react js to control mailbox. Backend folder running a flask microservice in the raspberry pi.

## Backend setup

Backend using python flask framework.

### Install

```
git clone url
cd backend
pip install flask
```

## Run

```
FLASK_APP=serve.py flask run --host=0.0.0.0
```

## Frontend Setup

Frontend is using react

### Install

```
npm install
```

Go to `frontend/src/config.js`

Change the url to your IP of raspberry pi

## Run

```
npm start
```

Access the panel from `http://rpi-address:3000`


