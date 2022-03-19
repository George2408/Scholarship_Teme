import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view-authors',
  templateUrl: './list-view-authors.component.html',
  styleUrls: ['./list-view-authors.component.scss']
})
export class ListViewAuthorsComponent implements OnInit {

  Authors: Author[];
  displayedColumns: string[];

  constructor(private _service: DataService) { }

  ngOnInit(): void {
    this.Authors = this._service.getAuthorsData();
    this.displayedColumns = ['image', 'name', 'dateOfBirth'];
  }

}
