from . import app
from os import environ
from dataclasses import dataclass


@dataclass
class GeneralSettings:
    title: str = "Home Lab Supervisor"
    main_color: int = 0x47748B
    secondary_color: int = 0xCDCDCD


@dataclass
class InvoiceSettings:
    name: str = " "
    address: str = " "
    phone: str = " "
    email: str = " "
    website: str = " "
    gst_num: str = " "


"""
Class that holds the configurations for the server.

Some of the values are gotten from ENV vars, while others 
are gotten from the setting.yml file.

"""


class Configuration:
    # Secret key for data encryption
    SECRET_KEY = environ.get("SERVER_SECRET_KEY")

    _DEFAULT_SETTINGS = {"general": GeneralSettings(), "invoice": InvoiceSettings()}

    def __init__(self):
        pass
