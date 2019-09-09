export interface FormDataPayload {
  period: string;
  categoryOptionCombo?: string;
  dataSet: string;
  orgUnit: string;
  dataElement: string;
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
