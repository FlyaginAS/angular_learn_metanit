import { Component } from '@angular/core';
    
@Component({
    selector: 'purchase-app',//куда отрисовать
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css'],
})


export class AppComponent { 
  name:string='sano';
  age:number=33;

  count:number=0;
  important:boolean=false;
  
  isRed:boolean=false;

  increaseCount($event:any):void{
    this.count++;
    console.log($event);
  }

  toggleImportant():void{
    this.important=!this.important;
    console.log(`important is ${this.important}`)
  }

  doRed():void{
    this.isRed=!this.isRed;
  }

    
    
    
}