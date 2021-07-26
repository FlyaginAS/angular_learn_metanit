import { Component, Input } from "@angular/core";

@Component({
  selector: 'child-comp',
  template: `
  <hr/>
  <p>User name:{{userName}}</p>
  <p>User age:{{userAge}}</p>
  <hr/>
  `,
  styles: [`h2, p {color:red;}`]
})

export  class ChildComponent{
  @Input() userName:string='';
  @Input() userAge:number=0;
}