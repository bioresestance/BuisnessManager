import asyncio
import os
import requests
import time
import flask


flaskApp = flask.Flask(__name__)


# Initializes the application
def init():
    
    flaskApp.config["DEBUG"] = True

    # Everything succeded up to this point, so return true
    return True



@flaskApp.route('/api/v1/', methods=['GET'])
def defaultRoute():

    return {"ping": "pong"}



if __name__ == "__main__":

    if init() == True:
        # Start the web service
        flaskApp.run(use_reloader=False, host="0.0.0.0")
    else:
        print("Exiting app, failed to intialize")

