import { UserEffects } from './user.effects';
import { SystemInfoEffects } from './system-info.effects';
import { RouterEffects } from './router.effects';
import { DataElementsEffects } from './data-element.effects';
import { AssessmentConfigurationEffects } from './assessment-configuration.effects';
import { VerificationConfigurationEffects } from './verification-configuration.effects';
import { GeneralConfigurationEffects } from './general-configuration.effects';
import { FormDataEffects } from './form-data.effects';

export const effects: any[] = [
  UserEffects,
  SystemInfoEffects,
  RouterEffects,
  DataElementsEffects,
  AssessmentConfigurationEffects,
  VerificationConfigurationEffects,
  GeneralConfigurationEffects,
  FormDataEffects
];
