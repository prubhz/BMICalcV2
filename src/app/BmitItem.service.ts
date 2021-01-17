import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class bmiItemService{
    bmiList =[{
        bmi: 0,
        weight:0,
        height:0,
    }];

    get() {
        return this.bmiList;
    }
    add(bmiItem){
        this.bmiList.push(bmiItem);
    }
    delete(bmiItem){
        const index = this.bmiList.indexOf(bmiItem);
        if (index >=0){
            this.bmiList.splice(index,1)
        }
    }
}

