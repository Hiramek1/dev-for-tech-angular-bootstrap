import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers()
    this.getHolding()
  }

  public customers: Customer[] | undefined
  public holdings: Holding[] | undefined

  private async getCustomers(){
    this.customers = await this.http.get<Customer[]>("http://localhost:3000/customers").toPromise()
  }
  private async getHolding(){
    this.holdings = await this.http.get<Holding[]>("http://localhost:3000/holdings").toPromise()
  }

}
