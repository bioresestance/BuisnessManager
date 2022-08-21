from flask import Flask
from server.config import Configuration, _SECRET_KEY, _APP_ROOT
from flask_restx import Api
from flask_cors import CORS
from server.models import db
from pathlib import Path


app = Flask(__name__)
cors = CORS()
restApi = Api()
serverconfig = Configuration()


def get_app():

    serverconfig.init()

    app.config["SECRET_KEY"] = _SECRET_KEY
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        "sqlite://" + "//home/aaron/app" + "/database.db"
    )

    print(app.config["SQLALCHEMY_DATABASE_URI"])

    # Register the different blueprints.
    from server.routes import api_routes

    # Appends API routes with /api/v1
    app.register_blueprint(api_routes, url_prefix="/api/v1/")

    restApi.init_app(app, doc=True)
    cors.init_app(app)
    db.app = app
    db.init_app(app)
    db.create_all()

    return app
