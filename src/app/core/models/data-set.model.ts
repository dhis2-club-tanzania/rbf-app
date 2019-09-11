export interface DataSet {
  id: string;
  periodType: string;
  timelyDays: number;
  name: string;
  description: string;
  openFuture: number;
  expiryDate: number;
  categoryCombo: {
    id: string;
  };
  dataSetELements: Array<{
    id: string;
    dataSet: { id: string };
    dataElement: { id: string };
  }>;
  indicator: Array<{ id: string }>;
  legendSets: any[];
  organisationUnits: Array<{ id: string }>;
}

export interface DataSets {
  dataSets: DataSet[];
}
