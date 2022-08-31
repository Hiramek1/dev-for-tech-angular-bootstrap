import { environment } from './../../environments/environment';
import { Cep } from '../models/viaCep';
import { HttpClient } from "@angular/common/http";

export class ViaCepService {
    constructor(private http: HttpClient)
    {

    }

    public async getViaCepAsync(cep:string) : Promise<Cep|undefined>{
        cep = cep.replace(/- | |\./g, "").trim()
        return await this.http.get<Cep>(`${environment.cepHost}/${cep}/json/`).toPromise()

    }
}