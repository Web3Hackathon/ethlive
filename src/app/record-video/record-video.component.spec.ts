import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordVideoComponent } from './record-video.component';

describe('RecordVideoComponent', () => {
  let component: RecordVideoComponent;
  let fixture: ComponentFixture<RecordVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RecordVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
