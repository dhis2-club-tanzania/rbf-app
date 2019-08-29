import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfigurationListComponent } from './general-configuration-list.component';

describe('GeneralConfigurationListComponent', () => {
  let component: GeneralConfigurationListComponent;
  let fixture: ComponentFixture<GeneralConfigurationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralConfigurationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConfigurationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
