import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoliveComponent } from './golive.component';

describe('GoliveComponent', () => {
  let component: GoliveComponent;
  let fixture: ComponentFixture<GoliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GoliveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
