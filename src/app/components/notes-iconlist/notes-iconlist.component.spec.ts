import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesIconlistComponent } from './notes-iconlist.component';

describe('NotesIconlistComponent', () => {
  let component: NotesIconlistComponent;
  let fixture: ComponentFixture<NotesIconlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesIconlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesIconlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
