import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurComponent } from './livreur.component';
import { HttpClientModule } from '@angular/common/http';

describe('LivreurComponent', () => {
  let component: LivreurComponent;
  let fixture: ComponentFixture<LivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreurComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
