import { Component } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-map-frontend';
  signedIn: boolean;
  private user: any;

  greeting: string;
  serverGreeting: Observable<string>;

  constructor( private amplifyService: AmplifyService, private http: HttpClient) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = "Hello " + this.user.username;
          console.log(authState);
          this.serverGreeting =
            this.http.get<any>("https://7nelk89tnl.execute-api.eu-west-1.amazonaws.com/Prod/hello")
              .pipe(map(o => o.greeting));
        }
      });
  }
}
