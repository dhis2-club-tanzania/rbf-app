import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

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

  ngOnInit() {  }

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
