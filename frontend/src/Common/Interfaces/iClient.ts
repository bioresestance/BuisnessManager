export interface iClient {
  area_code_zip: string;
  email: string;
  id: number;
  province_state: string;
  country: string;
  city: string;
  recipient: string;
  phone: string;
  address: string;
  client_name: string;
}

export interface iClientSimple {
  id: number
  name: string;
}
