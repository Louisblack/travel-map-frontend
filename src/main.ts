import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'eu-west-1:87a176a7-bba2-4431-b1c3-0132d2a3efb8',
    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-1_ZMRYnuO8s',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '3ivim2jpbbho7hf2ls8mv30vl2',
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
