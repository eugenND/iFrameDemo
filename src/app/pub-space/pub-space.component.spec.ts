import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubSpaceComponent } from './pub-space.component';

describe('PubSpaceComponent', () => {
  let component: PubSpaceComponent;
  let fixture: ComponentFixture<PubSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
