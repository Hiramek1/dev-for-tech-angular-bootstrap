import { environment } from './../../environments/environment';
import { Customer } from '../models/customer';
import { HttpClient } from "@angular/common/http";

export class CustomerService {
    constructor(private http: HttpClient) {
        
    }

    private static customers:Customer[] = []

    async addCustomer(customer:Customer){
        await this.http.post<Customer>(`${environment.jsonHost}/customers`, customer).toPromise()
        CustomerService.customers.push(customer)
    }

    public async listCustomers(){
        return await this.http.get<Customer[]>(`${environment.jsonHost}/customers`).toPromise()
    }
}