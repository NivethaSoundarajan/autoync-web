import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagestatusComponent } from './imagestatus.component';

describe('ImagestatusComponent', () => {
  let component: ImagestatusComponent;
  let fixture: ComponentFixture<ImagestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
