import { Component } from '@angular/core';
import {AppApiService} from "./app.api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Client App";
  greetings: any = '';

  constructor(private _appService: AppApiService) { }

  ngOnInit(): void {
    this._appService.httpGet('Hello/GetGreetings')
      .subscribe(x => {
          this.greetings = (x as any);
        },
        () =>{},
        () => {}
      );
  }
}
