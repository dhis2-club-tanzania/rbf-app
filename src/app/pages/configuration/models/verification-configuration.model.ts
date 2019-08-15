export interface VerificationConfiguration {
  indicator: string;
  dataElement: Array<{ id: string; name: string }>;
  unitFee: number;
  toleranceRate: number;
}
