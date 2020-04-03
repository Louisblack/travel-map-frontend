import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppModule} from './app.module';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
      declarations: [

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'travel-map-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('travel-map-frontend');
  });
  
});
