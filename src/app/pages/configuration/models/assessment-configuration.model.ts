export interface AssessmentConfiguration {
  indicator: string;
  dataElement: Array<{ id: string; name: string }>;
  possibleMaxValue: number;
}
