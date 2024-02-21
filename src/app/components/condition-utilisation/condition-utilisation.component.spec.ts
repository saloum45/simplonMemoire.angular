import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionUtilisationComponent } from './condition-utilisation.component';
import { HttpClientModule } from '@angular/common/http';

describe('ConditionUtilisationComponent', () => {
  let component: ConditionUtilisationComponent;
  let fixture: ComponentFixture<ConditionUtilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionUtilisationComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
