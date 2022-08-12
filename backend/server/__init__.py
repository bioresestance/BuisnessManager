from flask import Flask
from os import environ
import lib.InvoiceGenerator
from server.config import Configuration


app = Flask(__name__)
serverconfig = Configuration()


def get_app():

    # Set the secret key for the server from the env var.
    # if serverconfig.secret_key:
    app.config["SECRET_KEY"] = serverconfig._SECRET_KEY
    # else:
    #     raise Exception("Environmental Variable 'SECRET_KEY' is not defined!!!!")

    # Register the different blueprints.
    from .front_end_routes import fe_routes

    app.register_blueprint(fe_routes, url_prefix="/")

    return app
