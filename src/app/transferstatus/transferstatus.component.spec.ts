import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferstatusComponent } from './transferstatus.component';

describe('TransferstatusComponent', () => {
  let component: TransferstatusComponent;
  let fixture: ComponentFixture<TransferstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
