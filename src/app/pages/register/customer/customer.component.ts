import { customerService } from './../../../services/customerService';
import { HttpClient } from '@angular/common/http';
import { viaCepService } from './../../../services/viaCepService';
import { Cep } from './../../../models/viaCep';
import { Customer } from './../../../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  public customers: Customer[] = customerService.listCustomers()
  public customer:Customer = {} as Customer
  public cep:Cep|undefined = {} as Cep

  updateCustomers(){
    customerService.addCustomer(this.customer)
    this.showCustomers()
  }

  public showCustomers() {
    this.customers = customerService.listCustomers()
  }

  public async getViaCep(){
    this.cep = await new viaCepService(this.http).getViaCepAsync(this.customer.zip)
    if (this.cep){
      this.customer.street = this.cep.logradouro
      this.customer.city = this.cep.localidade
      this.customer.district = this.cep.bairro
      this.customer.state = this.cep.uf
    }
  }

}
