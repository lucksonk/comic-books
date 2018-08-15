import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ComicApiService } from '../../services/comic-api.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  hero: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private api: ComicApiService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('details for id ' + id);
    this.api.getHero(id).subscribe(res => {
      console.log(res);
      let temp: any = res;

      if (temp) {
         temp.data.results.forEach(element => {

               this.hero = {
                    id: element.id,
                    name: element.name,
                    description: element.description,
                    modified: element.modified,
                    image: element.thumbnail.path + '.' + element.thumbnail.extension,
                    details_url: element.urls[0].url
                 };

         });
      }
  });
}

}
