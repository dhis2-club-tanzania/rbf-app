export interface FormDataPayload {
  pe: string;
  co?: string;
  ds: string;
  ou: string;
  de: string;
  value: any;
}

export interface FormDataValue {
  id: string;
  val: string;
  com: string;
}

export interface FormDataValuesResponse {
  dataValues: FormDataValue[];
  minMaxDataElements: any[];
  complete: boolean;
  date: Date;
  storedBy: string;
}
