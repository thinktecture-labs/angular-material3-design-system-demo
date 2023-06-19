import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCardComponent } from './preview-card.component';

describe('PreviewCardComponent', () => {
  let component: PreviewCardComponent;
  let fixture: ComponentFixture<PreviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PreviewCardComponent]
    });
    fixture = TestBed.createComponent(PreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
