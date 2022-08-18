from flask import Blueprint, jsonify, Response
from server import serverconfig
from flask_restx import Resource, Api

api_routes = Blueprint("front End", __name__)
api = Api(api_routes)


@api.route("/settings")
class SettingsRoute(Resource):
    def get(self):
        return serverconfig.asDict()

    def post(self):
        print(api.payload)


@api.route("/settings/<group>")
@api.param("group", "Group ID to work with")
class SettingsGroupRoute(Resource):
    def get(self, group):
        if group not in serverconfig.asDict():
            return Response("Erorr 404: Group Token not in Settings", 404)
        return serverconfig.asDict()[group]

    def post(self, group):
        if group not in serverconfig.asDict():
            return Response("Erorr 404: Group Token not in Settings", 404)

        setattr(serverconfig, group, api.payload)
        serverconfig.saveToDisk()
        return serverconfig.asDict()
