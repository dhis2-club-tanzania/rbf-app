import { FormDataPayload } from '../models/form-data.model';

export function getPayload(payload: FormDataPayload): any {
  const newPayload = {
    dataSet: payload.dataSet,
    period: payload.period,
    orgUnit: payload.orgUnit,
    dataValues: [
      {
        dataElement: payload.dataElement,
        value: payload.value,
        categoryCombo: payload.categoryOption
      }
    ]
  };
  console.log(newPayload);
  return newPayload;
}
