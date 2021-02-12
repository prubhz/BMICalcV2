import { Component, OnInit,EventEmitter,Output,Input} from '@angular/core';


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

