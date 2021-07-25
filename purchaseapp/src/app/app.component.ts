import { Component } from '@angular/core';
    
@Component({
    selector: 'purchase-app',//куда отрисовать
    template: `<child-comp><p>This will include in ng-content</p></child-comp>
                <p>Привет {{name}}</p>`,
    styleUrls:['./app.component.css'],
})


export class AppComponent { 

  count:number=0;
  important:boolean=false;
  name:string;
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