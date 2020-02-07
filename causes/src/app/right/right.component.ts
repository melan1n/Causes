import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  @ViewChild('amountInput', {static: false}) amountInput: ElementRef<HTMLInputElement>;

  constructor(private causesService: CausesService) { } 

  get selectedCause() {
    return this.causesService.selectedCause;
  }

  get color() {
    if(this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if(this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount/3) &&
    this.selectedCause.collectedAmount > (this.selectedCause.neededAmount/3)) {
      return 'yellow';
    }
    return 'red';
  }

  ngOnInit() {
  }
    makeDonationHandler() {  
      this.causesService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
        this.causesService.loadCauses();
        this.amountInput.nativeElement.value = '';
      });
    }
  

}
