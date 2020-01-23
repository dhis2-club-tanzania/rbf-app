import { FormDataValue } from '../models/form-data.model';

export function getSanitizedFormData(formData: any): FormDataValue {
  return Object.assign(
    {},
    {
      id: this.getDataElementId(formData.id),
      val: formData.val,
      com: formData.com,
    }
  );
}

export function getDataElementId(id: string): string {
  const ids = id.split('-');
  return ids[0];
}
