import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieComponent } from './categorie.component';
import { HttpClientModule } from '@angular/common/http';

describe('CategorieComponent', () => {
  let component: CategorieComponent;
  let fixture: ComponentFixture<CategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
