import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
  APP_INITIALIZER
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Dhis2ApiService } from './services';

export function initialize(dhis2ApiService: Dhis2ApiService) {
  return () => dhis2ApiService.initialize();
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      deps: [Dhis2ApiService],
      multi: true
    }
  ],
  exports: []
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
