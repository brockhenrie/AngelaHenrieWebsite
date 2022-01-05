import {EventBusService, EventBusEvent} from './../../services/event-bus.service';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'key', 'timestamp', 'data'];
  dataSource$ = this.eventBus.eventsReference$;

  @ViewChild(MatTable) table?: MatTable<any>;

  constructor(private eventBus: EventBusService) {}

  addTestEvent() {
    this.eventBus.onCast('EventTable:Test', { message: 'test' });
  }

  removeData() {}

  ngOnInit(): void {

  }

  // ngOnDestroy(): void {
  //     this.dataSource.unsubscribe();
  // }


}
