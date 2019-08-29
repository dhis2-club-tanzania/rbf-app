import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UUID } from '@iapps/utils';
import * as _ from 'lodash';

import { ConfigurationService } from '../../services/configuration.service';
import { State } from 'src/app/store/reducers';
import { addGeneralConfigurations } from 'src/app/store/actions';
import { GeneralConfiguration } from '../../models/general-configuration.model';
import { Observable } from 'rxjs';
import { User } from 'src/app/core';
import { getCurrentUser } from 'src/app/store/selectors';

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
  currentUser$: Observable<any>;

  constructor(
    private periodType: ConfigurationService,
    private OrgUnitFetcher: ConfigurationService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.currentUser$ = this.store.select(getCurrentUser);
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
      id: UUID(),
      created: date,
      lastUpdate: date,
      organisationUnitLevel: level,
      errorRate: formData.errorRate,
      periodType: formData.periodType,
      user: { id: userObject.id, name: userObject.displayName }
    };
    this.store.dispatch(
      addGeneralConfigurations({ configuration: generalConfig })
    );
  }
}
