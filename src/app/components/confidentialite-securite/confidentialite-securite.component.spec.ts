import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialiteSecuriteComponent } from './confidentialite-securite.component';
import { HttpClientModule } from '@angular/common/http';

describe('ConfidentialiteSecuriteComponent', () => {
  let component: ConfidentialiteSecuriteComponent;
  let fixture: ComponentFixture<ConfidentialiteSecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidentialiteSecuriteComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidentialiteSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
