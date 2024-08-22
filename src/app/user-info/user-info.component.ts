// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { MsalService } from '@azure/msal-angular';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-user-info',
//   templateUrl: './user-info.component.html',
//   styleUrls: ['./user-info.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class UserInfoComponent implements OnInit {
//   userInfo: any;

//   constructor(private msalService: MsalService, private http: HttpClient) {}

//   ngOnInit(): void {
//     const account = this.msalService.instance.getActiveAccount();
//     if (account) {
//       const tokenRequest = {
//         scopes: ['User.Read']
//       };

//       this.msalService.acquireTokenSilent(tokenRequest).subscribe(response => {
//         const headers = new HttpHeaders().set('Authorization', `Bearer ${response.accessToken}`);
//         this.http.get('http://localhost:5002/user-info', { headers }).subscribe(userInfo => {
//           this.userInfo = userInfo;
//         });
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserInfoComponent implements OnInit {
  userInfo: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch user info directly from the Flask backend
    this.http.get('http://localhost:5002/user-info').subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }
}
