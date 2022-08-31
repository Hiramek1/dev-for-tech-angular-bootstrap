import { HttpClient } from '@angular/common/http';
import { HoldingService } from '../../services/HoldingService';
import { Holding } from './../../models/holding';
import { CustomerService } from '../../services/CustomerService';
import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers()
    this.getHolding()
  }

  public customers: Customer[] | undefined
  public holdings: Holding[] | undefined

  private async getCustomers(){
    this.customers = await new CustomerService(this.http).listCustomers()
  }
  private async getHolding(){
    this.holdings = await new HoldingService(this.http).listHoldings()
  }

}
