import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories:Category[];

  constructor(private _service: NoteService) { }

  ngOnInit(): void {
    this.categories = this._service.getFilters();
  }

}
