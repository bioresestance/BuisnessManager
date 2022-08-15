from flask import Flask
from server.config import Configuration


app = Flask(__name__)
serverconfig = Configuration()
serverconfig.init()


def get_app():

    # Set the secret key for the server from the env var.
    # if serverconfig._SECRET_KEY:
    #     app.config["SECRET_KEY"] = serverconfig._SECRET_KEY
    # else:
    #     raise Exception("Environmental Variable 'SECRET_KEY' is not defined!!!!")

    # Register the different blueprints.
    from .rest_api_routes import api_routes

    app.register_blueprint(api_routes, url_prefix="/api")

    return app
