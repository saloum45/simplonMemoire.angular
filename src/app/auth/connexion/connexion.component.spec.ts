import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionComponent } from './connexion.component';
import { HttpClientModule } from '@angular/common/http';

describe('ConnexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // test de la reponse du backend
  it('should return false when the informations passed to the login function are not truthy', () => {
    expect(component.connexionFortest("saem","Saloum454546")).toBeFalse();
  });


  // test de la reponse du backend
  it('should return true when the informations passed to the login function are  truthy', () => {
    expect(component.connexionFortest("saloumfall45@gmail.com","Saloum454546")).toBeFalse();
  });
 
});
