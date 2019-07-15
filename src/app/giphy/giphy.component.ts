import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
  providers: [GiphyService]
})
export class GiphyComponent implements OnInit {
  public showError: boolean = false;
  public showGiphyData: boolean = false;
  public giphydata: any;
  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  public getGiphydata(Text: string) {  // Function to get giphydata gighyservice is called
    if (Text != '') {
      this.showError = false;
      try {
        this.giphyService.getGiphySearchData(Text).subscribe(response => {
          if (response) {
            this.showGiphyData = true;
            this.giphydata = response;
          }
        },
          error => {
            console.log(error, "error");
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      this.showError = true;
      this.showGiphyData = false;
    }

  }

  HideError(Text: string) {  // Function to hide error message
    if (Text != '') {
      this.showError = false;
    } else {
      this.showError = true;
      this.showGiphyData = false;
    }
  }

}
