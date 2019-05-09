import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursTableauComponent } from './cours-tableau.component';

describe('CoursTableauComponent', () => {
  let component: CoursTableauComponent;
  let fixture: ComponentFixture<CoursTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
