export interface DataElement {
  id?: string;
  name: string;
  shortName: string;
  categoryCombo: Array<{ id: string }>;
  domainType: string;
  aggregationType: string;
  valueType: string;
  legendSets: Array<{ id: string }>;
  aggregationLevels: Array<number>;
  description: string;
  zeroIsSignificant: boolean;
  // TODO check if the below fields are necessary
  // formName: string;
  // fieldMask: string;
}
