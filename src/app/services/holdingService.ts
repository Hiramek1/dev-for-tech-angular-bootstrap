import { Holding } from './../models/holding';
import { HttpClient } from "@angular/common/http";

export class holdingService {
    constructor(private http: HttpClient) {
        
    }

    private static holdings:Holding[] = []

    async addHolding(holding:Holding){
        await this.http.post<Holding>("http://localhost:3000/holdings", holding).toPromise()
        holdingService.holdings.push(holding)
    }

}