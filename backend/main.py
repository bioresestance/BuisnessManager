from server import get_app


flaskApp = get_app()


if __name__ == "__main__":
    # Start the web service
    flaskApp.run()
