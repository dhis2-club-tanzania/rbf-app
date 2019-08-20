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
  selectedYear: number;
  currentYear: number;

  constructor(private periodType: ConfigurationService) { }

  ngOnInit() {
    this.periodType.getPeriodTypes()
    .subscribe(arg => this.periodTypes = arg.periodTypes);
    console.log(this.periodType);
  }

  updatePeriodType() {
    // if (this.periodFilterConfig.resetOnPeriodTypeChange) {
    //   this.selectedPeriods = [];
    // }

  }

  pushPeriodBackward(e) {
      e.stopPropagation();
      this.selectedYear--;
      // this.periodInstance.setYear(this.selectedYear).get();
      // this._setAvailablePeriods(this.selectedPeriodType);
    }

  pushPeriodForward(e) {
      e.stopPropagation();
      this.selectedYear++;
      // this.periodInstance.setYear(this.selectedYear).get();
      // this._setAvailablePeriods(this.selectedPeriodType);
    }

}
