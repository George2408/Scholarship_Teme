import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificateNoteComponent } from './modificate-note.component';

describe('ModificateNoteComponent', () => {
  let component: ModificateNoteComponent;
  let fixture: ComponentFixture<ModificateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificateNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
