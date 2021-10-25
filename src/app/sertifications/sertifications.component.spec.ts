import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertificationsComponent } from './sertifications.component';

describe('SertificationsComponent', () => {
  let component: SertificationsComponent;
  let fixture: ComponentFixture<SertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
