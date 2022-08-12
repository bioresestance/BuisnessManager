from os import environ
from dataclasses import dataclass, fields


class Setting:
    def Update(self, form):
        for f in fields(self):
            setattr(self, f.name, getattr(form, f.name).data)


@dataclass
class GeneralSettings(Setting):
    title: str = "Home Lab Supervisor"
    main_color: int = 0x47748B
    secondary_color: int = 0xCDCDCD


@dataclass
class InvoiceSettings(Setting):
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


@dataclass
class Configuration:
    # Secret key for data encryption
    _SECRET_KEY = environ.get("SERVER_SECRET_KEY")

    general = GeneralSettings()
    invoice = InvoiceSettings()

    def __init__(self):
        pass
