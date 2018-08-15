import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicApiService } from '../../services/comic-api.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {


  heroes = [];

  constructor(private api: ComicApiService, private router: Router) {}

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


 viewDetails(id: number) {
   console.log('@@@ clicked for details '+ id);
    this.router.navigateByUrl('details/'+id);
 }

}
