import { Component,  OnInit} from '@angular/core';
import { ComicApiService } from './services/comic-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  heroes = [];

  constructor(private api: ComicApiService) {}

  ngOnInit() {
    console.log('Init ...');
    this.api.allHeroes().subscribe(
      res => {
        console.log(res);
        let temp: any = res;

         if (temp) {
            temp.data.results.forEach(element => {

                   this.heroes.push({
                       id: element.id,
                       name: element.name,
                       description: element.description,
                       modified: element.modified,
                       image: element.thumbnail.path + '.' + element.thumbnail.extension,
                       details_url: element.urls[0].url
                    });

            });
         }

      });
  }
}
