import { holdingService } from './../../../services/holdingService';
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

  private holdings: Holding[] = holdingService.listHoldings()
  public holding: Holding = {} as Holding

  public updateHoldings() {
    holdingService.addHolding(this.holding)
    this.showHoldings()
  }

  public showHoldings() {
    this.holdings = holdingService.listHoldings()
  }

}
