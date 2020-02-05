import { Component, OnInit } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  
  constructor(private causesService: CausesService) { }

  get causes() {
    return this.causesService.causes;
  }
  ngOnInit() {
    this.causesService.loadCauses();
  }

}
