import { HttpClient } from '@angular/common/http';
import { holdingService } from './../../../services/holdingService';
import { Holding } from './../../../models/holding';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holding',
  templateUrl: './holding.component.html',
  styleUrls: ['./holding.component.sass']
})
export class HoldingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public holding: Holding = {} as Holding

  public async updateHoldings() {
    new holdingService(this.http).addHolding(this.holding)
  }

}
