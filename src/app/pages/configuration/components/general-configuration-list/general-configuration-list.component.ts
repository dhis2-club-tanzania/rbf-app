import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { GeneralConfiguration } from '../../models/general-configuration.model';
import { getGeneralConfiguration } from 'src/app/store/selectors/general-configuration.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-configuration-list',
  templateUrl: './general-configuration-list.component.html',
  styleUrls: ['./general-configuration-list.component.css']
})
export class GeneralConfigurationListComponent implements OnInit {
  generalConfiguration$: Observable<GeneralConfiguration>;
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.generalConfiguration$ = this.store.select(getGeneralConfiguration);
  }

  onUpdateConfigurations() {
    console.log('Updated Configurations');
    this.router.navigate(['/configuration/general/update']);
  }
}
