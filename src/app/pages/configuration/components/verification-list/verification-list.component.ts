import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.css']
})
export class VerificationListComponent implements OnInit {

  verificationIndicators: VerificationIndicators[] = [

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
