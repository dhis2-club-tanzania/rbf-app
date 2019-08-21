import { Component, OnInit, Input } from '@angular/core';
import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  @Input() selectedPeriodType: string;

  periodTypes: any[];
  OrgUnitLevels: any[];

  constructor(private periodType: ConfigurationService, private OrgUnitFetcher: ConfigurationService) { }

  ngOnInit() {
    this.periodType.getPeriodTypes()
    .subscribe(arg => this.periodTypes = arg.periodTypes);
    console.log(this.periodType);
    this.OrgUnitFetcher.getOrgUnitsLevel()
      .subscribe(arg => this.OrgUnitLevels = arg.organisationUnitLevels);

  }

}
