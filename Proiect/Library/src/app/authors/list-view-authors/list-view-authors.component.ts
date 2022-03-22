import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/interfaces/author';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-view-authors',
  templateUrl: './list-view-authors.component.html',
  styleUrls: ['./list-view-authors.component.scss']
})
export class ListViewAuthorsComponent implements OnInit {

  authors: Author[];
  displayedColumns: string[];

  constructor(private _service: DataService, private router: Router) { }

  ngOnInit(): void {
    this._service.getAuthorsData().subscribe( (authors:Author[]) => this.authors = authors);
    this.displayedColumns = ['image', 'name', 'dateOfBirth'];
  }

  detailView(id: string)
  {
    let route = 'detail-author/'+`${id}`;
    this.router.navigate([route]);
  }

}
