import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProjectCardComponent } from './active-project-card.component';

describe('ActiveProjectCardComponent', () => {
  let component: ActiveProjectCardComponent;
  let fixture: ComponentFixture<ActiveProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActiveProjectCardComponent]
    });
    fixture = TestBed.createComponent(ActiveProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
