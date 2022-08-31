import { environment } from './../../environments/environment';
import { Holding } from '../models/holding';
import { HttpClient } from "@angular/common/http";

export class HoldingService {
    constructor(private http: HttpClient) {
        
    }

    private static holdings:Holding[] = []

    async addHolding(holding:Holding){
        await this.http.post<Holding>(`${environment.jsonHost}/holdings`, holding).toPromise()
        HoldingService.holdings.push(holding)
    }

    public async listHoldings(){
        return await this.http.get<Holding[]>(`${environment.jsonHost}/holdings`).toPromise()
    }

}