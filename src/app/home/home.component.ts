import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public CurrentTime: Date = new Date();
  public showDate:boolean= true;

  constructor( private router:Router) {
      setInterval(() => {
        this.CurrentTime = new Date();
      }, 1);
  }
  ngOnInit() {
  }

 functiontoShowDate(){
    this.showDate = !this.showDate;
  }

  gotoGiphyPage(){
    this.router.navigate(['giphy']); // Navigate to router page
  }

}
