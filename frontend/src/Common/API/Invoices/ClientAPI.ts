import { AxiosInstance } from "axios";

class ClientAPI {
  constructor(private apiClient: AxiosInstance) {}

  public get = async (isSimple = false) => {
    const response = await this.apiClient.get(
      `/invoice/clients${isSimple ? "?isSimple=true" : ""}`
    );
    return response.data;
  };

  public create = async (data: object) => {
    const response = await this.apiClient.post("/invoice/clients/", data);
    return response;
  };

  public delete = async (id: number) => {
    const response = await this.apiClient.delete(`/invoice/clients/${id}`);
    return response;
  };
}

export default ClientAPI;
