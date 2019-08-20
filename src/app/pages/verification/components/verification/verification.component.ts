import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {


  title = 'app';
  orgUnitObject: any;
  action: string;
  orgUnitFilterConfig: OrgUnitFilterConfig = {
    singleSelection: false,
    showUserOrgUnitSection: false,
    showOrgUnitLevelGroupSection: false,
    showOrgUnitGroupSection: true,
    showOrgUnitLevelSection: false
  };
  selectedOrgUnitItems: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onOrgUnitUpdate(orgUnitObject, action) {
    this.orgUnitObject = orgUnitObject;
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

