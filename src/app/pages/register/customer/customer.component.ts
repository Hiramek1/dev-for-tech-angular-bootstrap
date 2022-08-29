import { Customer } from './../../../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public customer:Customer = {} as Customer

  viewModel(){
    console.log(this.customer)
  }

}
