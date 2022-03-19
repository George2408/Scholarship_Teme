import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewBooksComponent } from './list-view-books.component';

describe('ListViewBooksComponent', () => {
  let component: ListViewBooksComponent;
  let fixture: ComponentFixture<ListViewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
