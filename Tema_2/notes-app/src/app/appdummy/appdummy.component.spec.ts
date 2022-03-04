import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdummyComponent } from './appdummy.component';

describe('AppdummyComponent', () => {
  let component: AppdummyComponent;
  let fixture: ComponentFixture<AppdummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
