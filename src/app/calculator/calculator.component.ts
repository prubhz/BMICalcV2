import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {bmiItemService} from '../BmitItem.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  form: FormGroup; 
  bmi: number;
  height: number;
  weight: number;
  bmiItemArray =[];
 // bmiItemAdd = {height:0,weight:0,bmi:0};
  @Output() delete = new EventEmitter();

  constructor(private bmiItemService: bmiItemService){}

  onDelete(){
    console.log('deleted');
    this.delete.emit();
    console.log("emitted")
    //this.bmiItemArray =[];
  }
  ngOnInit() {
    this.form = new FormGroup({
      weight: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')
        ])),
      height: new FormControl('',Validators.required)
    });
    
    this.bmiItemArray = this.bmiItemService.get();
  }
  onSubmit(bmiItem){
    console.log(bmiItem,"here");
    this.calculate(bmiItem);
    this.height = bmiItem.height;
    this.weight = bmiItem.weight;
    bmiItem.bmi = this.bmi

    // this.bmiItemArray.push({height:this.height,weight:this.weight,bmi:this.bmi})
    // console.log(this.bmiItemArray);
    this.bmiItemService.add(bmiItem);
  }
  calculate(data){
    console.log("calculating bmi")
    this.bmi = data.weight/(data.height * data.height)

  }

  onBmiItemDelete(event){
    //console.log(bmiItem, array);
    console.log("delete event", event)
    //this.bmiItemArray =[];
    this.bmiItemService.delete(event);
   
   }
}
