import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../../../configuration/services/configuration.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

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
