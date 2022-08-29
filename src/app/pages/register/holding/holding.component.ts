import { Holding } from './../../../models/holding';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holding',
  templateUrl: './holding.component.html',
  styleUrls: ['./holding.component.sass']
})
export class HoldingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public holding:Holding = {} as Holding

}
