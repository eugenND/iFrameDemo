import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswortComponent } from './change-passwort.component';

describe('ChangePasswortComponent', () => {
  let component: ChangePasswortComponent;
  let fixture: ComponentFixture<ChangePasswortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
