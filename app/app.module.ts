import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {Graph} from "./graph.component";
import { ChartsModule  } from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from "./mygraph.component";

@NgModule({
  imports:      [ BrowserModule,ChartsModule ],
  declarations: [ AppComponent,Graph,LineChartDemoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
