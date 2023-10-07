import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSecondComponent } from './third-second.component';

describe('ThirdSecondComponent', () => {
  let component: ThirdSecondComponent;
  let fixture: ComponentFixture<ThirdSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
