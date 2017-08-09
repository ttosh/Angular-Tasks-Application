import { Component, Input, OnInit } from '@angular/core';

import { PopoverModule } from 'ngx-popover';


@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {

  private title = 'Tasks';

  constructor () {
  }

  ngOnInit() {

  }

  refreshData() {

  }

}

