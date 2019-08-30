export interface FormDataPayload {
  period: string;
  categoryCombo: string;
  dataSet: string;
  orgUnit: string;
  value: any;
}

export interface FormDataValues {
  id: string;
  val: string;
  com: string;
}

export interface FormDataValuesResponse {
  dataValues: FormDataValues[];
  minMaxDataElements: any[];
  complete: boolean;
  date: Date;
  storedBy: string;
}
