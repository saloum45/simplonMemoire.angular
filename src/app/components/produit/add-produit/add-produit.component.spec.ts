import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProduitComponent } from './add-produit.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddProduitComponent', () => {
  let component: AddProduitComponent;
  let fixture: ComponentFixture<AddProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProduitComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
