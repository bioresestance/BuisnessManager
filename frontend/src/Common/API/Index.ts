import axios, { AxiosInstance } from "axios";
import ClientAPI from "./Invoices/ClientAPI";
import InvoiceAPI from "./Invoices/InvoiceAPI";
import SettingsAPI from "./Settings/SettingsAPI";
import "vite/client";

class API {
  private static _baseUrl = import.meta.env.VITE_BACKEND_URL;

  private static _apiClient = axios.create({ baseURL: this._baseUrl });

  // API Enpoints
  private static _settings = new SettingsAPI(this._apiClient);
  private static _invoices = new InvoiceAPI(this._apiClient);
  private static _clients = new ClientAPI(this._apiClient);

  static get baseUrl() {
    return this._baseUrl;
  }

  static get settings() {
    return this._settings;
  }

  static get invoices() {
    return this._invoices;
  }

  static get clients() {
    return this._clients;
  }
}

export default API;
