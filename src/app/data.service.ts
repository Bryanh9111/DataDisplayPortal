import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';  // Import switchMap
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5001/updated-data/process';  // API URL

  constructor(private http: HttpClient, private msalService: MsalService) {}

  getData(): Observable<any> {
    // const account = this.msalService.instance.getActiveAccount();
    // if (account) {
    //   const tokenRequest = {
    //     scopes: ['User.Read']
    //   };

    //   return this.msalService.acquireTokenSilent(tokenRequest).pipe(
    //     switchMap(response => {
    //       const headers = new HttpHeaders().set('Authorization', `Bearer ${response.accessToken}`);
    //       return this.http.get<any>(this.apiUrl, { headers });
    //     })
    //   );
    // }
    return this.http.get<any>(this.apiUrl); 
  }
}

