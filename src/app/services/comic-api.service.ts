import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Md5} from 'ts-md5/dist/md5';
var PrivateKey = 'd44ae21bd13a8efd96d15ae7de5993512cda0507';

var PublicKey = '8299f2957f3901ba8e785750edcd3820';

var TimeStamp = new Date().getTime();
var hash = Md5.hashStr(TimeStamp + PrivateKey + PublicKey).toString();

@Injectable()
export class ComicApiService {

  constructor(private http: HttpClient) {}

  allHeroes() {
    console.log('service ..');
    let url = 'https://gateway.marvel.com/v1/public/comics?ts='+TimeStamp+'&apikey='+PublicKey+'&hash='+hash;

    console.log('url ' +url);
    return this.http.get(url);
  }

}
