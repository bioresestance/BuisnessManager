from flask import Flask

app = Flask(__name__)


def get_app():

    from .front_end_routes import fe_routes

    app.register_blueprint(fe_routes, url_prefix= "/")

    return app

