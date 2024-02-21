import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduitComponent } from './edit-produit.component';
import { HttpClientModule } from '@angular/common/http';

describe('EditProduitComponent', () => {
  let component: EditProduitComponent;
  let fixture: ComponentFixture<EditProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProduitComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
