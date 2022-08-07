import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerMenuComponent } from './streamer-menu.component';

describe('StreamerMenuComponent', () => {
  let component: StreamerMenuComponent;
  let fixture: ComponentFixture<StreamerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
