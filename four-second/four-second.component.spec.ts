import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourSecondComponent } from './four-second.component';

describe('FourSecondComponent', () => {
  let component: FourSecondComponent;
  let fixture: ComponentFixture<FourSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
