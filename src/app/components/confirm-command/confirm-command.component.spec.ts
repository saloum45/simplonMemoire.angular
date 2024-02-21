import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCommandComponent } from './confirm-command.component';
import { HttpClient } from '@angular/common/http';

describe('ConfirmCommandComponent', () => {
  let component: ConfirmCommandComponent;
  let fixture: ComponentFixture<ConfirmCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCommandComponent,HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
