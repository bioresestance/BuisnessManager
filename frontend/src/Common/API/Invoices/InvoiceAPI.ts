import { AxiosInstance } from "axios";

class InvoiceAPI {
  constructor(private apiClient: AxiosInstance) {}

  public get = async () => {
    const response = await this.apiClient.get("/invoice/");
    return response.data;
  };

  public create = async (data: object) => {
    const response = await this.apiClient.post("/invoice/", data);
    return response;
  };

  public delete = async (id: number) => {
    const response = await this.apiClient.delete(`/invoice/${id}/`);
    return response;
  };
}

export default InvoiceAPI;
