import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurComponent } from './utilisateur.component';
import { HttpClient } from '@angular/common/http';

describe('UtilisateurComponent', () => {
  let component: UtilisateurComponent;
  let fixture: ComponentFixture<UtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateurComponent,HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
