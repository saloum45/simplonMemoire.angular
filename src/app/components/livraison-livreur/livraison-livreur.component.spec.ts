import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonLivreurComponent } from './livraison-livreur.component';
import { HttpClientModule } from '@angular/common/http';

describe('LivraisonLivreurComponent', () => {
  let component: LivraisonLivreurComponent;
  let fixture: ComponentFixture<LivraisonLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivraisonLivreurComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
