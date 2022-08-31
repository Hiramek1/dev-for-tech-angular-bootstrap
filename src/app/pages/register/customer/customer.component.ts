import { HttpClient } from '@angular/common/http';
import { ViaCepService } from '../../../services/ViaCepService';
import { Cep } from './../../../models/viaCep';
import { Customer } from './../../../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/CustomerService';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  public customer:Customer = {} as Customer
  public cep:Cep|undefined = {} as Cep

  public async updateCustomers(){
    new CustomerService(this.http).addCustomer(this.customer)
  }

  public async getViaCep(){
    this.cep = await new ViaCepService(this.http).getViaCepAsync(this.customer.zip)
    if (this.cep){
      this.customer.street = this.cep.logradouro
      this.customer.city = this.cep.localidade
      this.customer.district = this.cep.bairro
      this.customer.state = this.cep.uf
    }
  }

}
