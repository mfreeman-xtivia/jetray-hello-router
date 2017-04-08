import {NgModule, Component, Injector,Input,enableProdMode} from '@angular/core';
import {UIRouter,UIRouterModule} from "ui-router-ng2";
import {FormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {RootAppModuleNgFactory} from '../aot/src/hello_router_aot.ngfactory';
import {platformBrowser} from '@angular/platform-browser';
import {App,Hello,About} from './components';

/*
 * Routing Config and States 
 */
 
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {

  // Handle cases where un-matched routes are seen.
  // If no URL matches, and we don't already have a current state,
  // then go to the `home` state by default. If we already have a current
  // state then do nothing and stay where we were.
  router.urlService.rules.otherwise(function(_router,_url) {
    let currentState = router.stateService.current.name;
    if (!currentState) {
      router.stateService.go('home',null,{location:false});
    }
    return;
  });
} 

let homeState =  { name: 'home',  url: '',              component: Hello }; 
let helloState = { name: 'hello', url: '/helloRouter',  component: Hello }; 
let aboutState = { name: 'about', url: '/aboutRouter',  component: About };

/*
 * Root Application NgModule 
 */

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({ states: [ homeState,helloState, aboutState ], 
                             config: uiRouterConfigFn,
                             useHash: true 
                           })
  ],
  declarations: [ App, Hello, About ],
  bootstrap: [ App ]
})
export class RootAppModule {}

/*
 * Angular 2 AoT bootstrap 
 */
enableProdMode();
platformBrowser().bootstrapModuleFactory(RootAppModuleNgFactory);
