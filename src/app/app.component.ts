import { Component } from '@angular/core';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalService, MsalModule, MSAL_INSTANCE } from '@azure/msal-angular';
import { DataTableComponent } from './data-table/data-table.component';  
import { UserInfoComponent } from './user-info/user-info.component'; 

export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'real-client-id',  // Replace with real Azure AD client ID
      authority: 'https://login.microsoftonline.com/your-tenant-id',  // Replace with real Azure AD tenant ID
      redirectUri: 'http://localhost:4200'  // Matches Angular app's URL
    }
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  standalone: true,
  imports: [MsalModule, DataTableComponent, UserInfoComponent] 
})
export class AppComponent {
  title = 'DataDisplayPortal';

  constructor(private msalService: MsalService) {}

  // Handle MSAL-related logic here
}

