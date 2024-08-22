import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { AppComponent } from './app/app.component';

export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'real-client-id',  // Replace with real Azure AD client ID
      authority: 'https://login.microsoftonline.com/real-tenant-id',  // Replace with real Azure AD tenant ID
      redirectUri: 'http://localhost:4200',  // Ensure this matches Angular app's URL
    },
  });
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
  ],
}).catch(err => console.error(err));

