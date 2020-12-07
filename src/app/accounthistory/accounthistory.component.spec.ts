import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounthistoryComponent } from './accounthistory.component';

describe('AccounthistoryComponent', () => {
  let component: AccounthistoryComponent;
  let fixture: ComponentFixture<AccounthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccounthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccounthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
