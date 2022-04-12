import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayWeatherBoxComponent } from './one-day-weather-box.component';

describe('OneDayWeatherBoxComponent', () => {
  let component: OneDayWeatherBoxComponent;
  let fixture: ComponentFixture<OneDayWeatherBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDayWeatherBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayWeatherBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
