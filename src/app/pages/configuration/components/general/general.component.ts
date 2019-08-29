import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UUID } from '@iapps/utils';
import * as _ from 'lodash';

import { ConfigurationService } from '../../services/configuration.service';
import { State } from 'src/app/store/reducers';
import {
  addGeneralConfigurations,
  updateGeneralConfigurations
} from 'src/app/store/actions';
import { GeneralConfiguration } from '../../models/general-configuration.model';
import { Observable } from 'rxjs';
import { User } from 'src/app/core';
import { getCurrentUser } from 'src/app/store/selectors';
import {
  getGeneralConfiguration,
  getGeneralConfigurationPeriodType,
  getGeneralConfigurationErrorRate
} from 'src/app/store/selectors/general-configuration.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  currentUser$: Observable<any>;
  periodType$: Observable<string>;
  errorRate$: Observable<number>;

  periodTypes: any[];
  OrgUnitLevels: any[];
  generalConfigForm;
  generalConfiguration: GeneralConfiguration;

  constructor(
    private periodType: ConfigurationService,
    private OrgUnitFetcher: ConfigurationService,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.currentUser$ = this.store.select(getCurrentUser);
    this.periodType$ = this.store.select(getGeneralConfigurationPeriodType);
    this.errorRate$ = this.store.select(getGeneralConfigurationErrorRate);
    this.generateForm();
    this.periodType
      .getPeriodTypes()
      .subscribe(arg => (this.periodTypes = arg.periodTypes));
    this.OrgUnitFetcher.getOrgUnitsLevel().subscribe(
      arg => (this.OrgUnitLevels = arg.organisationUnitLevels)
    );
  }

  generateForm() {
    this.generalConfigForm = new FormGroup({
      periodType: new FormControl(this.periodType$),
      OrgUnitLevel: new FormControl(),
      errorRate: new FormControl(this.errorRate$)
    });
  }

  onClickSave(formData) {
    const level = _.find(
      this.OrgUnitLevels,
      orgunit => orgunit.id === formData.OrgUnitLevel
    );
    let userObject: User = null;
    this.currentUser$.subscribe(user => {
      userObject = user;
    });
    const date = new Date();
    const generalConfig: GeneralConfiguration = {
      id: 'default',
      created: date,
      lastUpdate: date,
      organisationUnitLevel: level,
      errorRate: formData.errorRate,
      periodType: formData.periodType,
      user: { id: userObject.id, name: userObject.displayName }
    };
    this.store.dispatch(
      updateGeneralConfigurations({ configuration: generalConfig })
    );
    this.router.navigate(['/configuration/general']);
  }
}
