import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../../../configuration/services/configuration.service';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  dataSelections;
  selectionFilterConfig: SelectionFilterConfig = {
    allowStepSelection: true,
    stepSelections: ['pe', 'ou', 'dx', 'vrg'],
    dataFilterConfig: {
      singleSelection: true,
      enabledSelections: []
    },
    periodFilterConfig: {
      singleSelection: true
    }
  };

  constructor() {}

  ngOnInit() {}

  onFilterUpdateAction(dataSelections) {
    this.dataSelections = dataSelections;
    console.log(dataSelections);
    console.log(this.dataSelections);
  }
}
