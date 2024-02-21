import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterComponent } from './newsletter.component';
import { HttpClientModule } from '@angular/common/http';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
