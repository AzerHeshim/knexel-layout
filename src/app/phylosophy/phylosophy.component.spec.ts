import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhylosophyComponent } from './phylosophy.component';

describe('PhylosophyComponent', () => {
  let component: PhylosophyComponent;
  let fixture: ComponentFixture<PhylosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhylosophyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhylosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
