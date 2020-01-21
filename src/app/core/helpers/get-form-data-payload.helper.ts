import { FormDataPayload } from '../../shared/models/form-data.model';

export function getPayload(payload: FormDataPayload): any {
  const newPayload = {
    dataSet: payload.dataSet,
    period: payload.period,
    orgUnit: payload.orgUnit,
    dataValues: [
      {
        dataElement: payload.dataElement,
        value: payload.value,
        categoryCombo: payload.categoryOptionCombo,
      },
    ],
  };
  console.log(newPayload);
  return newPayload;
}
