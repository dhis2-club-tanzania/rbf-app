import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfigurationListComponent } from './general-configuration-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('GeneralConfigurationListComponent', () => {
  let component: GeneralConfigurationListComponent;
  let fixture: ComponentFixture<GeneralConfigurationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralConfigurationListComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConfigurationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO Revisit this test
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
