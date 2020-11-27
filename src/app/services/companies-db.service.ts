import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompaniesDbService {
  API_BASE_URL = environment.BASE_URL + 'companies';

  constructor(private http: HttpClient) {}

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<any>(this.API_BASE_URL).pipe(
      take(1),
      map((responseObj) => {
        return this.mapResponseObjToCompanyArr(responseObj);
      })
    );
  }

  mapResponseObjToCompanyArr(responseObj: any): Company[] {
    const tempArr: Company[] = [];

    responseObj.forEach((item: any) => {
      const newTempCompany: Company = {
        id: item.id,
        name: item.name,
        phrase: item.phrase,
        city: item.city,
        country: item.country,
        imageUrl: item.imageUrl,
      };

      tempArr.push(newTempCompany);
    });

    return tempArr;
  }
}
