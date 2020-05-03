import { Component, OnInit } from '@angular/core';
import { IStatewise } from 'src/app/shared/interfaces/IStatewise';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  cards: IStatewise[];
  
  constructor(private apiService: ApiService) {
    
  }
  ngOnInit(): void {
    this.getStatewiseData();
  }

  getStatewiseData(){
    this.apiService.getStatewiseData().subscribe(data => {
      this.cards = data.statewise;     
    })
  }

  checkIfTotal(state: string){
   if (state == 'Total'){
     return false;
   }
   else{
     return true;
   }
  }
}
