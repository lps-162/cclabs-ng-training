import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSectionComponent } from './emp-section.component';

describe('EmpSectionComponent', () => {
  let component: EmpSectionComponent;
  let fixture: ComponentFixture<EmpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
