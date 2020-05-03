import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-wise',
  templateUrl: './district-wise.component.html',
  styleUrls: ['./district-wise.component.scss']
})
export class DistrictWiseComponent implements OnInit {

  state: string;
  cards: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state = this.activatedRoute.snapshot.params.state;
    this.getDistrictwiseData();
  }

  getDistrictwiseData(){
    this.apiService.getDistrictwiseData().subscribe(data => {
      var obj = data;
      for (var property in obj){
        if (obj.hasOwnProperty(property)) {
          if(property == this.state){
          this.cards = obj[property].districtData;
          }
      }
      }
    })
  }

}
