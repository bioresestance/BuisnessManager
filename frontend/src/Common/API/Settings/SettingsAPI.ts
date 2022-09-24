import axios, { AxiosInstance } from "axios";

class SettingsAPI {
  constructor(private apiClient: AxiosInstance) {}

  public get = async () => {
    const response = await this.apiClient.get("/settings/");
    return response.data;
  };

  public getGroup = async (groupName: string) => {
    const response = await this.apiClient.get(`/settings/${groupName}/`);
    return response.data;
  };

  public update = async (settingsData: object) => {
    const response = await this.apiClient.post(`/settings/`, settingsData);
    return response.data;
  };

  public updateGroup = async (groupIndex: number, settingsData: object) => {
    const response = await this.apiClient.post(
      `/settings/${groupIndex}`,
      settingsData
    );
    return response.data;
  };
}

export default SettingsAPI;
