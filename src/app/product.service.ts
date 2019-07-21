import { Injectable } from '@angular/core';

//import  {Http, Response } from '@angular/common/http';
import { HttpClientModule } from '@angular/http';
//import { HttpClient } from '@angular/common/http';

//import 'rxja/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../asset/album.json';

  constructor(private _http: Http) { }
  //constructor(private _httpClient: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => response.json());
    //return this._httpClient.get(this._albumUrl);
  }
}
