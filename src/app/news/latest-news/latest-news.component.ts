import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards: INewsDetails[];
  isLoggedin = false;
  dataArray: INewsDetails[];

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getNewsDetails();
    if (localStorage.getItem('isLoggedIn') == "true") { 
        this.isLoggedin = true;
    }
    else{
      this.isLoggedin = false;
    }  
  }

  getNewsDetails(){
     this.apiService.getNewsDetails().subscribe(data => {
        this.cards = data;
        if (localStorage.getItem('details') !== null){
         this.dataArray = JSON.parse(localStorage.getItem('details'));
         if(data[data.length-1].id !== this.dataArray[this.dataArray.length-1].id){
         this.dataArray.forEach(element => {
           this.cards.push(element);
         })
        }
        }
     })    
  }

}
