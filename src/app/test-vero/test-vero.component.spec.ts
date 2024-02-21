import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVeroComponent } from './test-vero.component';

describe('TestVeroComponent', () => {
  let component: TestVeroComponent;
  let fixture: ComponentFixture<TestVeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestVeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestVeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
