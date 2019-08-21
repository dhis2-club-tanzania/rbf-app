import { Component, OnInit } from '@angular/core';
import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  orgUnitObject: any;
  periodObject: any;
  periodFilterConfig: PeriodFilterConfig = {
    singleSelection: false,
    emitOnSelection: false
  };
  action: string;
  orgUnitFilterConfig: OrgUnitFilterConfig = {
    singleSelection: false,
    showUserOrgUnitSection: false,
    showOrgUnitLevelGroupSection: false,
    showOrgUnitGroupSection: true,
    showOrgUnitLevelSection: false
  };
  selectedOrgUnitItems: any[] = [];
  selectedPeriodItems: any[] = [];

  constructor() { }

  ngOnInit() {  }

  onOrgUnitUpdate(orgUnitObject, action) {
    this.orgUnitObject = orgUnitObject;
    this.action = action;
  }
  onPeriodUpdate(periodObject, action) {
    this.periodObject = periodObject;
    this.action = action;
  }
}
export interface OrgUnitFilterConfig {
  singleSelection: boolean;
    showUserOrgUnitSection: boolean;
    showOrgUnitLevelGroupSection: boolean;
    showOrgUnitGroupSection: boolean;
    showOrgUnitLevelSection: boolean;
}
