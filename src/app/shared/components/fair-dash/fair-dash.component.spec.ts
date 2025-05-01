import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairDashComponent } from './fair-dash.component';

describe('FairDashComponent', () => {
  let component: FairDashComponent;
  let fixture: ComponentFixture<FairDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
