import { holdingService } from './../../services/holdingService';
import { Holding } from './../../models/holding';
import { customerService } from './../../services/customerService';
import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public customers: Customer[] = customerService.listCustomers()
  public holdings: Holding[] = holdingService.listHoldings()

}
