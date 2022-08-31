import { Customer } from '../models/customer';
import { HttpClient } from "@angular/common/http";

export class customerService {
    constructor(private http: HttpClient) {
        
    }

    private static customers:Customer[] = []

    async addCustomer(customer:Customer){
        await this.http.post<Customer>("http://localhost:3000/customers", customer).toPromise()
        customerService.customers.push(customer)
    }
}