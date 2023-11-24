import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseMeDaddyComponent } from './release-me-daddy.component';

describe('ReleaseMeDaddyComponent', () => {
  let component: ReleaseMeDaddyComponent;
  let fixture: ComponentFixture<ReleaseMeDaddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseMeDaddyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReleaseMeDaddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
