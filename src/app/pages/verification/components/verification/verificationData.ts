export interface VerificationData {
  id: string;
  indicator: string;
  monthlyValues: {
    rep: number;
    ver: number;
    periodId: string;
    periodName: string;
    orgUnitID: string;
  }[];
  unitFee: number;
}
