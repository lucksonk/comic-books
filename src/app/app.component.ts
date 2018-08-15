import { Component,  OnInit} from '@angular/core';
import { ComicApiService } from './services/comic-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data;
  constructor(private api: ComicApiService) {}

  ngOnInit() {
    console.log('Init ...');
    this.api.allHeroes().subscribe(res => {console.log(res); if (res) { this.data = res; } });
  }
}
