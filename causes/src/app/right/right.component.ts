import { Component, OnInit } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor(private causeService: CausesService) { } 

  get selectedCause() {
    return this.causeService.selectedCause;
  }

  ngOnInit() {
  }

}
