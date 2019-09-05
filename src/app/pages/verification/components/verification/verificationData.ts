export interface VerificationData {
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
export const verificationData: VerificationData[] = [
  {
    indicator: 'Malaria',
    monthlyValues: [
      {
        rep: 90,
        ver: 23,
        periodId: 'Ching@lo',
        periodName: 'Month 1 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 9,
        ver: 10,
        periodId: 'Chin@lo',
        periodName: 'Month 2 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 90,
        ver: 103,
        periodId: 'Cng@lo',
        periodName: 'Month 3 year 1',
        orgUnitID: 'blaChak'
      }
    ],
    unitFee: 34566
  },
  {
    indicator: 'Cholerae',
    monthlyValues: [
      {
        rep: 250,
        ver: 243,
        periodId: 'Ching@lo',
        periodName: 'Month 1 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 50,
        ver: 43,
        periodId: 'Ching@lo',
        periodName: 'Month 2 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 90,
        ver: 100,
        periodId: 'Ching@lo',
        periodName: 'Month 3 year 1',
        orgUnitID: 'blaChak'
      }
    ],
    unitFee: 987
  },
  {
    indicator: 'Ebora',
    monthlyValues: [
      {
        rep: 530,
        ver: 653,
        periodId: 'Ching@lo',
        periodName: 'Month 1 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 530,
        ver: 653,
        periodId: 'Ching@lo',
        periodName: 'Month 2 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 530,
        ver: 653,
        periodId: 'Ching@lo',
        periodName: 'Month 3 year 1',
        orgUnitID: 'blaChak'
      }
    ],
    unitFee: 543
  },
  {
    indicator: 'HIV',
    monthlyValues: [
      {
        rep: 50,
        ver: 923,
        periodId: 'Ching@lo',
        periodName: 'Month 1 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 530,
        ver: 653,
        periodId: 'Ching@lo',
        periodName: 'Month 2 year 1',
        orgUnitID: 'blaChak'
      },
      {
        rep: 530,
        ver: 653,
        periodId: 'Ching@lo',
        periodName: 'Month 3 year 1',
        orgUnitID: 'blaChak'
      }
    ],
    unitFee: 123
  }
];
