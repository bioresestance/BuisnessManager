from flask import Blueprint, request, render_template


fe_routes = Blueprint("front End", __name__)


@fe_routes.route("/")
def home_route():
    return render_template("index.html")
