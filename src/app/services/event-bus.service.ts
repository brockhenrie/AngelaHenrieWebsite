import { BehaviorSubject, Subject } from 'rxjs';
import { NgEventBus } from 'ng-event-bus';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';


export class EventBusEvent {
  readonly key!:string;
  readonly data?: object;
  readonly timestamp!: string;
  readonly id!: number;

  constructor(key:string, id: number, timestamp:string, data?: object){
    this.key = key;
    this.timestamp = timestamp;
    this.id = id;
    this.timestamp = this.timestamp
    this.data = data;
  }

}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  events: [EventBusEvent] = [
    new EventBusEvent('init', 1, new Date().toUTCString())
  ]




  eventsReference$ = new BehaviorSubject<[EventBusEvent]>([...this.events]);



  constructor(
    private eb: NgEventBus,
  ) { }

  onCast(key:string, data:object){
    const timestamp = new Date().toUTCString();
    const id = this.createId();
    const newEvent = new EventBusEvent(key, id, timestamp, data);
    this.eb.cast(key, data);
    this.addEvent(newEvent);
    this.eventsReference$.next([...this.events])



  }

  onOn(key:string){
    return this.eb.on(key);
  }

  onKeyMatch(key:string, wildcard:string){
    return this.eb.keyMatch(key,wildcard);
  }

  createId(){
    if(this.events[0].key === 'init'){
      return 1;
    }else{
     return this.events.length + 1;
    }
  }

  addEvent(newEvent:EventBusEvent){
    if(this.events[0].key === 'init'){
     this.events[0] = newEvent;
    }else {
    this.events.push(newEvent);
    }
  }





}
