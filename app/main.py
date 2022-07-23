from server import get_app





if __name__ == "__main__":
 
    # Start the web service
    flaskApp = get_app()
    flaskApp.run(use_reloader=False, host="0.0.0.0")


