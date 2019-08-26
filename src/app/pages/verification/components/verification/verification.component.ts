import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';
import { Component, OnInit } from '@angular/core';
import { OrgUnitFilterConfig } from '@iapps/ngx-dhis2-org-unit-filter';

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
  testLooper = '';

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
      this.periodLooper = [this.periodObject.items[0].name];
    }
    if (this.periodObject.items[0].type === 'BiMonthly') {
      this.testLooper = this.periodObject.items[0];
      switch (this.periodObject.items[0].id.charAt(5)) {
        case '1':
          {
            this.periodLooper = ['January', 'February'];
          }
          break;
        case '2':
          {
            this.periodLooper = ['March', 'April'];
          }
          break;
        case '3':
          {
            this.periodLooper = ['May', 'June'];
          }
          break;
        case '4':
          {
            this.periodLooper = ['July', 'August'];
          }
          break;
        case '5':
          {
            this.periodLooper = ['September', 'October'];
          }
          break;
        case '6':
          {
            this.periodLooper = ['November', 'December'];
          }
          break;
      }
    }
    if (this.periodObject.items[0].type === 'Quarterly') {
      switch (this.periodObject.items[0].id.charAt(5)) {
        case '1':
          {
            this.periodLooper = ['January', 'February', 'March'];
          }
          break;
        case '2':
          {
            this.periodLooper = ['April', 'May', 'June'];
          }
          break;
        case '3':
          {
            this.periodLooper = ['July', 'August', 'September'];
          }
          break;
        case '4':
          {
            this.periodLooper = ['October', 'November', 'December'];
          }
          break;
      }
    }
    if (this.periodObject.items[0].type === 'SixMonthly') {
      switch (this.periodObject.items[0].id.charAt(5)) {
        case '1':
          {
            this.periodLooper = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June'
            ];
          }
          break;
        case '2':
          {
            this.periodLooper = [
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ];
          }
          break;
      }
    }
    if (this.periodObject.items[0].type === 'Yearly') {
      this.periodLooper = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
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
