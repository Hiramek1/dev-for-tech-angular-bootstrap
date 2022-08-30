import { Customer } from '../models/customer';
import { HttpClient } from "@angular/common/http";

export class customerService {

    private static customers:Customer[] = []

    public static addCustomer(customer:Customer){
        customerService.customers.push(customer)
    }

    public static listCustomers(){
        return customerService.customers
    }

}