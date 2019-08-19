import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.css']
})
export class VerificationListComponent implements OnInit {

  verificationIndicators: VerificationIndicators[] = [
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
    { indicator: 'Agu Poit Kik', dataElement: 'Kikrsdew', unitFee: 34532, toleranceRate: 431 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
  export interface VerificationIndicators {
    indicator: string;
    dataElement: string;
    unitFee: number;
    toleranceRate: number;
}
