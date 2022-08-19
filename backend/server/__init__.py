from pydoc import doc
from flask import Flask
from server.config import Configuration
from flask_restx import Api
from flask_cors import CORS


app = Flask(__name__)
cors = CORS()
restApi = Api()

serverconfig = Configuration()
serverconfig.init()


def get_app():

    # Set the secret key for the server from the env var.
    # if serverconfig._SECRET_KEY:
    #     app.config["SECRET_KEY"] = serverconfig._SECRET_KEY
    # else:
    #     raise Exception("Environmental Variable 'SECRET_KEY' is not defined!!!!")

    # Register the different blueprints.
    from server.routes import api_routes

    # Appends API routes with /api/v1
    app.register_blueprint(api_routes, url_prefix="/api/v1/")

    restApi.init_app(app, doc=True)
    cors.init_app(app)

    return app
