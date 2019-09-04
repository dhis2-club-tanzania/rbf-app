export interface VerificationData {
  indicator: string;
  monthlyValues: {
    rep: number;
    ver: number;
    periodId: string;
    orgUnitID: string;
  }[];
  unitFee: number;
}
export const verificationData: VerificationData[] = [
  {
    indicator: 'Malaria',
    monthlyValues: [
      { rep: 90, ver: 23, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 9, ver: 10, periodId: 'Chin@lo', orgUnitID: 'blaChak' },
      { rep: 90, ver: 103, periodId: 'Cng@lo', orgUnitID: 'blaChak' }
    ],
    unitFee: 34566
  },
  {
    indicator: 'Cholerae',
    monthlyValues: [
      { rep: 250, ver: 243, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 50, ver: 43, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 90, ver: 100, periodId: 'Ching@lo', orgUnitID: 'blaChak' }
    ],
    unitFee: 34566
  },
  {
    indicator: 'Ebora',
    monthlyValues: [
      { rep: 530, ver: 653, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 530, ver: 653, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 530, ver: 653, periodId: 'Ching@lo', orgUnitID: 'blaChak' }
    ],
    unitFee: 3466
  },
  {
    indicator: 'HIV',
    monthlyValues: [
      { rep: 50, ver: 923, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 530, ver: 653, periodId: 'Ching@lo', orgUnitID: 'blaChak' },
      { rep: 530, ver: 653, periodId: 'Ching@lo', orgUnitID: 'blaChak' }
    ],
    unitFee: 34566
  }
];
