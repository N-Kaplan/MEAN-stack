import { Component, OnInit } from '@angular/core';
import { Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendlist';
  friendModel = new Friend('', '', '');
}
