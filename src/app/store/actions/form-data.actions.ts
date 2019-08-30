import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { FormDataValue } from 'src/app/core/models/form-data.model';

export const loadFormDataValues = createAction('[FORM DATA] Load form data');

export const loadFormDataValuesSuccess = createAction(
  '[FORM DATA] Load form data Success',
  props<{ formDataValues: FormDataValue[] }>()
);

export const loadFormDataValuesFail = createAction(
  '[FORM DATA] Load form data Fail',
  props<{ error: ErrorMessage }>()
);

export const addFormDatavalues = createAction('[FORM DATA] Add form data');

export const addFormDatavaluesFail = createAction(
  '[FORM DATA] Add form data Fail',
  props<{ error: ErrorMessage }>()
);

export const addFormDatavaluesSuccess = createAction(
  '[FORM DATA] Add form data Success',
  props<{ formDataValues: FormDataValue }>()
);
