import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './configuration.routes';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromConfiguration from './components';

@NgModule({
  declarations: [...fromConfiguration.components],
  imports: [CommonModule, RoutingModule, ReactiveFormsModule]
})
export class ConfigurationModule {}
