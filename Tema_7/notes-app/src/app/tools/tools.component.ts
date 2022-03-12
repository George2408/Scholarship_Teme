import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  titleColor:string="white";
   constructor( ) { }

  ngOnInit(): void {
  }

  colorModification(instant:string){
    this.titleColor = instant;
  }}
