import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {

  Authors: Author[];
  displayedColumns: string[] = ['image', 'name', 'dateOfBirth'];

  constructor(private _service: DataService) {}

  ngOnInit(): void {

    this.Authors = this._service.getAuthorsData();
  }
}
