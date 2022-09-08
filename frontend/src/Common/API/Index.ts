import axios, { AxiosInstance } from "axios";
import SettingsAPI from "./Settings/SettingsAPI"

class API {

    private static _baseUrl = "http://localhost:5000/api/v1"

    private static _apiClient=axios.create({ baseURL: this._baseUrl});

    private static _settings = new SettingsAPI(this._apiClient);


    static get baseUrl() {
        return this._baseUrl;
    }

    static get settings() {
        return this._settings;
    }


}


export default API;
