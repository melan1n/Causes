import { Component, OnInit } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  causes: ICause[]

  

  constructor() { }

  ngOnInit() {
  }

}
