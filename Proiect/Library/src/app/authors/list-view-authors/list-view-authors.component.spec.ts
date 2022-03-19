import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewAuthorsComponent } from './list-view-authors.component';

describe('ListViewAuthorsComponent', () => {
  let component: ListViewAuthorsComponent;
  let fixture: ComponentFixture<ListViewAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
