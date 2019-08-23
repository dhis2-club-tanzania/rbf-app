import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  showOrgUnitFilter = false;
  showPeriodFilter = false;

  periodObject: any;
  orgUnitObject: any;
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

  constructor() {}

  ngOnInit() {}

  onOrgUnitToggle() {
    this.showOrgUnitFilter = !this.showOrgUnitFilter;
  }

  onPeriodToggle() {
    this.showPeriodFilter = !this.showPeriodFilter;
  }

  onOrgUnitUpdate(orgUnitObject, action) {
    this.orgUnitObject = orgUnitObject;
    this.action = action;
    this.onOrgUnitToggle();
  }
  onPeriodUpdate(periodObject, action) {
    this.periodObject = periodObject;
    this.action = action;
    this.onPeriodToggle();
  }
}
export interface OrgUnitFilterConfig {
  singleSelection: boolean;
  showUserOrgUnitSection: boolean;
  showOrgUnitLevelGroupSection: boolean;
  showOrgUnitGroupSection: boolean;
  showOrgUnitLevelSection: boolean;
}
