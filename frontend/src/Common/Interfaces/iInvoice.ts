import { iClient } from "./iClient";

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export default interface iInvoice {
  id?: number;
  file_path?: string;
  client?: iClient;
  client_id: number;
  date: string;
  items: InvoiceItem[];
}
