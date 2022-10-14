from flask import Flask
from server.config import Configuration, _SECRET_KEY, _APP_ROOT
from flask_restx import Api
from flask_cors import CORS
from flask_migrate import Migrate
from server.models import db


app = Flask(__name__)
cors = CORS()
restApi = Api()
migrate = Migrate()
serverconfig = Configuration()


def get_app():

    serverconfig.init()

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
    app.config["SECRET_KEY"] = _SECRET_KEY
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:////{_APP_ROOT}/database.db"

    # Register the different blueprints.
    from server.routes import api_routes

    # Appends API routes with /api/v1
    app.register_blueprint(api_routes, url_prefix="/api/v1/")

    restApi.init_app(app, doc=True)
    cors.init_app(app=app)
    db.app = app
    db.init_app(app)
    migrate.init_app(app, db)

    return app
