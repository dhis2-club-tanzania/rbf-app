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
  showForm = true;

  formData: any;

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
      OrgUnitLevel: new FormControl(),
      errorRate: new FormControl()
    });
  }
  onClickSave(formData) {
    this.formData = formData;
    this.showFormControl();
  }

  showFormControl() {
    this.showForm = !this.showForm;
  }
}
