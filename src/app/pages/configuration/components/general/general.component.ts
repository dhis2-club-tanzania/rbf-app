import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';

import { ConfigurationService } from '../../services/configuration.service';
import { State } from 'src/app/store/reducers';
import { updateGeneralConfigurations } from 'src/app/store/actions';
import { GeneralConfiguration } from '../../models/general-configuration.model';
import { User } from 'src/app/core';
import { getCurrentUser } from 'src/app/store/selectors';
import { getGeneralConfiguration } from 'src/app/store/selectors/general-configuration.selectors';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, OnDestroy {
  perodTypeSubscription: Subscription;
  orgunitLevelSubscription: Subscription;
  generalConfigSubscription: Subscription;

  generalConfigurations$: Observable<GeneralConfiguration>;
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
    this.generalConfigurations$ = this.store.select(getGeneralConfiguration);
    this.currentUser$ = this.store.select(getCurrentUser);
    this.generateForm();
    this.perodTypeSubscription = this.periodType
      .getPeriodTypes()
      .subscribe(arg => (this.periodTypes = arg.periodTypes));
    this.orgunitLevelSubscription = this.OrgUnitFetcher.getOrgUnitsLevel().subscribe(
      arg => (this.OrgUnitLevels = arg.organisationUnitLevels)
    );
  }
  ngOnDestroy() {
    this.orgunitLevelSubscription.unsubscribe();
    this.perodTypeSubscription.unsubscribe();
    this.generalConfigSubscription.unsubscribe();
  }

  generateForm() {
    this.generalConfigSubscription = this.generalConfigurations$.subscribe(
      config => (this.generalConfiguration = config)
    );
    this.generalConfigForm = new FormGroup({
      periodType: new FormControl(this.generalConfiguration.periodType),
      OrgUnitLevel: new FormControl(),
      errorRate: new FormControl(this.generalConfiguration.errorRate)
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
      ...this.generalConfiguration,
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
