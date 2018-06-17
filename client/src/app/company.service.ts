import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './company'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CompanyService {

  public API = 'http://localhost:8090/secured';
  public COMPANY_API = this.API + '/company';

  constructor(private http: HttpClient) {

  }

  public getCompany() {
    let headersa = new HttpHeaders().append('Authorization', 'Bearer 8bcfe7d1-3c70-4cee-8c34-f004212e0af2');
    return this.http.get<Company[]>(this.COMPANY_API, {
      headers: headersa,
    });
  }

}
