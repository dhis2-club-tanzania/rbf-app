import { Component, OnInit } from '@angular/core';
import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  periodObject: any;
  action: string;

  periodFilterConfig: PeriodFilterConfig = {
    singleSelection: false,
    emitOnSelection: false
  };
  selectedPeriodItems: any[] = [];

  onPeriodUpdate(periodObject, action) {
    this.periodObject = periodObject;
    this.action = action;
  }

  constructor() {}

  ngOnInit() {
  }

}
