import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  @Input() selectedPeriodType: string;

  periodTypes: any[];
  OrgUnitLevels: any[];

  generalConfigForm;

  constructor(
    private periodType: ConfigurationService,
    private OrgUnitFetcher: ConfigurationService
  ) {}

  ngOnInit() {
    this.periodType
      .getPeriodTypes()
      .subscribe(arg => (this.periodTypes = arg.periodTypes));
    this.OrgUnitFetcher.getOrgUnitsLevel().subscribe(
      arg => (this.OrgUnitLevels = arg.organisationUnitLevels)
    );

    this.generalConfigForm = new FormGroup({
      periodType: new FormControl(),
      OrgUnitLevel: new FormControl()
    });
  }
  onClickSave(formData) {
    console.log(formData);
  }
}
