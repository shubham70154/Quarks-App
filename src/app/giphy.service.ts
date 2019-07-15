import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GiphyService {
  public apiURL: string = "http://api.giphy.com/v1/gifs/search";

  constructor(private http: HttpClient) { }

  getGiphySearchData(Text: any) {
    if (Text) {
      return this.http.get(this.apiURL + '?q=' + `${Text}` + '&api_key=JhTOJ0rn9DVIgy24W6D9MFDdOIFNQVf3&limit=5');
    }
  }

}

