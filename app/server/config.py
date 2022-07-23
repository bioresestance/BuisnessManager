from os import environ


'''
Class that holds the configurations for the server.

Some of the values are gotten from ENV vars, while others 
are goten from the setting.yml file.

'''
class Configuration():
    # Secret key for data encryption
    secret_key = environ.get("SERVER_SECRET_KEY")
    # Mode the server is running in.
    server_env = environ.get("SERVER_ENV")