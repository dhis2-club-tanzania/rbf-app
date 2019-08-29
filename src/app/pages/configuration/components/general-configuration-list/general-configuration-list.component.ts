import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-configuration-list',
  templateUrl: './general-configuration-list.component.html',
  styleUrls: ['./general-configuration-list.component.css']
})
export class GeneralConfigurationListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onUpdateConfigurations() {
    console.log('Updated Configurations');
  }
}
