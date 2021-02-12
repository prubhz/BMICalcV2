import { Component, OnInit,EventEmitter,Output,Input} from '@angular/core';
import {bmiItemService} from "d:/Work/Latest angular/bmiCalc/src/app/BmitItem.service"


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
@Input() bmiItem;
@Output() delete = new EventEmitter();

  onDelete(){
    console.log('deleted');
    this.delete.emit(this.bmiItem);
    console.log("emitted")

  }


}

