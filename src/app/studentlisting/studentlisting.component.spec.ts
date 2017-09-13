import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistingComponent } from './studentlisting.component';

describe('StudentlistingComponent', () => {
  let component: StudentlistingComponent;
  let fixture: ComponentFixture<StudentlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
