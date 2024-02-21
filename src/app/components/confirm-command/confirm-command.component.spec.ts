import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCommandComponent } from './confirm-command.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfirmCommandComponent', () => {
  let component: ConfirmCommandComponent;
  let fixture: ComponentFixture<ConfirmCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCommandComponent,HttpClientModule,RouterTestingModule],
      // providers:[HttpClientModule]
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
