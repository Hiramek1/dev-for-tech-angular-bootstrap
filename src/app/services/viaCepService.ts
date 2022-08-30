import { Cep } from './../models/viaCep';
import { HttpClient } from "@angular/common/http";

export class viaCepService {
    constructor(private http: HttpClient)
    {

    }

    public async getViaCepAsync(cep:string) : Promise<Cep|undefined>{
        cep = cep.replace(/- | |\./g, "").trim()
        return await this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`).toPromise()

    }
}