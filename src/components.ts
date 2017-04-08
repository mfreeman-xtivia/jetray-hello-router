import {NgModule, Component,Input} from '@angular/core';

/*
 * Components
 */
@Component({
  selector: 'hello-router',
  template: `
  <h3><b>{{title}}</b></h3>
  <a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  <ui-view></ui-view>
  `
})
export class App { 
  public title:string  = 'UI-Router Portlet';
}

@Component({  
  template: '<h3>{{message}}</h3><input type="text" [(ngModel)]="message" />' 
})
export class Hello {
  @Input()
  message: string = "Watch me change!!";
}

@Component({ 
  template: '<h3>About Page for the UI-Router hello world app!</h3>' 
})
export class About { }