import { EventBusService } from './../../services/event-bus.service';
import { NgEventBus } from 'ng-event-bus';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MetaData } from 'ng-event-bus/lib/meta-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  messageReceived$ = this.eventBus.onOn("Dashboard:Message");
  inputForm = {
    label: '',
    error: '',
    value: ''
  }

  outputForm = {
    label: '',
    error: '',
    value: ''
  }

   cardsContent = [
    { title: 'Input', cols: 1, rows: 1 },
    { title: 'Output', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsContent;
      }

     return this.cardsContent;
    })
  );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private eventBus: EventBusService
    ) {}


    onSendMessage(event:string){
      this.eventBus.onCast("Dashboard:Message",{event });

    }

    onReceiveMessage(){
      return this.eventBus.onOn("Dashboard:Message");
    }

    onReset(){
      this.inputForm = {
        label: '',
        error: '',
        value: ''
      }
    }

}
