export interface DataSet {
  id: string;
  periodType: string;
  timelyDays: number;
  name: string;
  shortName: string;
  code: string;
  description: string;
  openFuturePeriods: number;
  expiryDays: number;
  categoryCombo: {
    id: string;
  };
  dataSetElements: Array<{
    id: string;
    dataSet: { id: string };
    dataElement: Array<{ id: string }>;
  }>;
  indicator?: Array<{ id: string }>;
  legendSets?: any[];
  organisationUnits: Array<{ id: string }>;
}

export interface DataSets {
  dataSets: DataSet[];
}
