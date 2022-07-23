from os import environ
from dataclasses import dataclass


@dataclass()
class GeneralSettings():

    title: str = "Home Lab Supervisor"





'''
Class that holds the configurations for the server.

Some of the values are gotten from ENV vars, while others 
are gotten from the setting.yml file.

'''
class Configuration():
    # Secret key for data encryption
    secret_key = environ.get("SERVER_SECRET_KEY")
    # Mode the server is running in.
    server_env = environ.get("SERVER_ENV")


    _DEFAULT_SETTINGS = {

        "general" : GeneralSettings()
    }


    def __init__(self):
        pass