import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseComponent } from './adresse.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AdresseComponent', () => {
  let component: AdresseComponent;
  let fixture: ComponentFixture<AdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdresseComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
