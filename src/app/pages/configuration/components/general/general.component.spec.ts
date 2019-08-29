import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponent } from './general.component';
import { NgxDhis2PeriodFilterModule } from '@iapps/ngx-dhis2-period-filter';
import { RouterTestingModule } from '@angular/router/testing';

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralComponent],
      imports: [NgxDhis2PeriodFilterModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO Revisit this test
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
