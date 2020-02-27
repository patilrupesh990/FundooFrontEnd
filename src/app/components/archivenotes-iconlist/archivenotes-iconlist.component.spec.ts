import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivenotesIconlistComponent } from './archivenotes-iconlist.component';

describe('ArchivenotesIconlistComponent', () => {
  let component: ArchivenotesIconlistComponent;
  let fixture: ComponentFixture<ArchivenotesIconlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivenotesIconlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivenotesIconlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
