from os import environ
from os.path import exists
from os import mkdir
from dataclasses import dataclass, asdict, fields
from pathlib import Path
from dataclass_wizard import YAMLWizard


class Setting(YAMLWizard):
    def update(self, new):
        for f in fields(self):
            setattr(self, f.name, getattr(new, f.name))


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
_SECRET_KEY = environ.get("SERVER_SECRET_KEY")
_APP_ROOT = Path("/home/aaron/app")
_APP_CONFIG_FILE = "config.cfg"


@dataclass
class Configuration(Setting):
    # Secret key for data encryption
    general: GeneralSettings = GeneralSettings()
    invoice: InvoiceSettings = InvoiceSettings()

    def init(self):
        # First ensure the root user folder exists
        if not exists(_APP_ROOT):
            mkdir(_APP_ROOT)
        # Load any existing config file from disk.
        self.loadFromDisk()

    def asDict(self):
        return asdict(self)

    def loadFromDisk(self):
        config_file = _APP_ROOT / _APP_CONFIG_FILE
        # First ensure the file even exists
        if exists(config_file):
            self.update(self.from_yaml_file(config_file))
        else:
            self.to_yaml_file(config_file)

    def saveToDisk(self):
        config_file = _APP_ROOT / _APP_CONFIG_FILE
        self.to_yaml_file(config_file)
