import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './configuration.routes';

import * as fromConfiguration from './components';

@NgModule({
  declarations: [...fromConfiguration.components],
  imports: [CommonModule, RoutingModule]
})
export class ConfigurationModule {}
