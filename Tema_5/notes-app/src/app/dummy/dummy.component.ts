import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {


  id:string;

  constructor(private _router: Router, private _activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouted.params.subscribe(parameter =>{
      this.id = parameter['id'];
    })
  }

}
