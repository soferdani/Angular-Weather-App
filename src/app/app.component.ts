import { Mode } from './shared/mode.enum';
import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { AuthQuery } from './login/state/auth.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular Weather App';

  user$ :Observable <string| null> = of(null);
  
  
  constructor(private authQuery: AuthQuery) {
    this.user$ = this.authQuery.user$
  }

  

}
