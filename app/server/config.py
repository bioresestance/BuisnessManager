from os import environ
from dataclasses import dataclass


@dataclass()
class GeneralSettings():

    def CommonName(self):
        return "General Settings"

    title: str = "Home Lab Supervisor"
    main_color: int = 0x47748b
    secondary_color: int = 0xcdcdcd




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