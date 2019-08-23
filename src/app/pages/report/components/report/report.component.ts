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
    stepSelections: ['dx', 'vrg', 'pe', 'ou'],
    dataFilterConfig: {
      singleSelection: true,
      enabledSelections: ['in']
    },
    periodFilterConfig: {
      singleSelection: true
    }
  };

  constructor() { }

  ngOnInit() { }

  onFilterUpdateAction(dataSelections) {
    console.log(dataSelections);
  }
}
