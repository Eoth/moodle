import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoodleComponent } from './menu-moodle.component';

describe('MenuMoodleComponent', () => {
  let component: MenuMoodleComponent;
  let fixture: ComponentFixture<MenuMoodleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMoodleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
