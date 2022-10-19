from dataclasses import asdict
from flask import Blueprint, jsonify, Response
from server import serverconfig
from flask_restx import Resource, Api

setting_routes = Blueprint("settings", __name__)
api = Api(setting_routes)


@api.route("/")
class SettingsRoute(Resource):
    def get(self):
        return serverconfig.asDict()

    def post(self):
        print(api.payload)


@api.route("/<int:group_id>/")
@api.param("group_id", "Group id to work with")
@api.doc(params={"group_id": "Group id to work with"})
class SettingsGroupRoute(Resource):
    def get(self, group_id: int):
        if group_id >= len(serverconfig.config_data):
            return Response("Erorr 404: Group ID not in Settings", 404)
        return asdict(serverconfig.config_data[group_id])

    def post(self, group_id: int):
        if group_id >= len(serverconfig.config_data):
            return Response("Erorr 404: Group ID not in Settings", 404)

        list_items = list(serverconfig.config_data)

        print(f"Received new setting update for {group_id}")

        # Creates new object based on currect index, sets data from payload.
        new_setting = serverconfig.config_data[list_items[group_id]].__class__(
            **api.payload
        )

        serverconfig.config_data[list_items[group_id]] = new_setting
        # print(serverconfig.config_data)
        serverconfig.saveToDisk()
        return serverconfig.asDict()
