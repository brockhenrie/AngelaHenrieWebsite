import { NgEventBus } from 'ng-event-bus';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tabs = [
    {label:'Dashboard', route: 'dashboard'},
    {label:'Events', route:'events'},
    {label:'Products', route:'products/productControl'},
    {label:'Orders', route:'orders'},
    {label: 'Users', route:'users'},
    {label:'Posts', route: 'posts'}
  ];
  activeLink = this.tabs[0].route;


  tabLoadTimes: Date[] = [];

  constructor
  (private breakpointObserver: BreakpointObserver,
    private eventBus: NgEventBus  ) { }

  ngOnInit(): void {
  }



  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

}
