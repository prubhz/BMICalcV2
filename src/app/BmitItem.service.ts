import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class bmiItemService{
    bmiList =[{
        bmi: 0,
        weight:0,
        height:0,
    }];

    get() {

        console.log("GET CALLED");
        return this.bmiList;
    }
    add(bmiItem){

        console.log("ADD CALLED");
        this.bmiList.push(bmiItem);
    }
    delete(bmiItem){
        
        const index = this.bmiList.indexOf(bmiItem);
        console.log("DELETE CALLED",index,bmiItem);
        if (index >=0){
            this.bmiList.splice(index,1)
        }

    }
}

