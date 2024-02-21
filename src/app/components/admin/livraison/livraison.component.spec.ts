import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonComponent } from './livraison.component';
import { HttpClientModule } from '@angular/common/http';

describe('LivraisonComponent', () => {
  let component: LivraisonComponent;
  let fixture: ComponentFixture<LivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivraisonComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
