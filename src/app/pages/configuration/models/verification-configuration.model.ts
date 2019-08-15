export interface VerificationConfiguration {
  indicator: string;
  dataElement: { id: string; name: string };
  unitFee: number;
  toleranceRate: number;
}
