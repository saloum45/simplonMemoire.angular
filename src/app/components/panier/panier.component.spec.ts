import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierComponent } from './panier.component';
import { HttpClientModule } from '@angular/common/http';

describe('PanierComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
