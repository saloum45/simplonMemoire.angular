import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuComponent } from './sidemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidemenuComponent', () => {
  let component: SidemenuComponent;
  let fixture: ComponentFixture<SidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuComponent,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
