import { Holding } from './../models/holding';
import { HttpClient } from "@angular/common/http";

export class holdingService {

    private static holdings:Holding[] = []

    public static addHolding(holding:Holding){
        holdingService.holdings.push(holding)
    }

    public static listHoldings(){
        return holdingService.holdings
    }

}