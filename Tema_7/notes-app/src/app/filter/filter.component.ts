import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../category';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories:Category[];


  @Output() emitSelectedFilter = new EventEmitter<string>();



  constructor(private _service: NoteService) { }

  ngOnInit(): void {
    this.categories = this._service.getFilters();
  }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
  }




}
