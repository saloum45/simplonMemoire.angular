import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProduitComponent } from './details-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailsProduitComponent', () => {
  let component: DetailsProduitComponent;
  let fixture: ComponentFixture<DetailsProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProduitComponent,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
