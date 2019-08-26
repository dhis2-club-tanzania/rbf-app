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
    singleSelection: true,
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

  orgUnitLevel: any;

  periodLooper = [];

  // Form Properties are deckared below

  constructor() {}

  ngOnInit() {}

  onOrgUnitToggle() {
    this.showOrgUnitFilter = !this.showOrgUnitFilter;
  }

  onPeriodToggle() {
    this.showPeriodFilter = !this.showPeriodFilter;
  }

  setOrgUnitLevel() {
    switch (this.orgUnitObject.items[0].level) {
      case 1:
        this.orgUnitLevel = 'National';
        break;
      case 2:
        this.orgUnitLevel = 'District';
        break;
      case 3:
        this.orgUnitLevel = 'Chiefdom';
        break;
      case 4:
        this.orgUnitLevel = 'Facility';
        break;
    }
  }

  onOrgUnitUpdate(orgUnitObject, action) {
    this.orgUnitObject = orgUnitObject;
    this.action = action;
    this.onOrgUnitToggle();
    this.setOrgUnitLevel();
  }
  onPeriodUpdate(periodObject, action) {
    this.periodObject = periodObject;
    this.action = action;
    this.onPeriodToggle();
    this.setPeriodLooper();
    console.log(periodObject);
  }

  setPeriodLooper() {
    if (this.periodObject.items[0].type === 'Monthly') {
      this.periodLooper.push(this.periodObject.items[0].name);
    }
  }
}
export interface OrgUnitFilterConfig {
  singleSelection: boolean;
  showUserOrgUnitSection: boolean;
  showOrgUnitLevelGroupSection: boolean;
  showOrgUnitGroupSection: boolean;
  showOrgUnitLevelSection: boolean;
}
