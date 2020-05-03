import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup;
  dataArray: INewsDetails[] = [];

  constructor(public fb: FormBuilder, private apiService: ApiService, private toastrService: ToastrService ,  private router: Router) { }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required, Validators.minLength(15)]],
      fullnews: ["", [Validators.required, Validators.minLength(25)]],
      image: [{ value: "", disabled: false }, Validators.required]
  });
  }

  save(newsDetail: INewsDetails) {
    console.log("Adding");
    this.apiService.addNewsDetails(newsDetail).subscribe(data => {
      if (localStorage.getItem('details') !== null){
      this.dataArray = JSON.parse(localStorage.getItem('details'))
      }
      this.dataArray.push(data);
     localStorage.setItem('details', JSON.stringify(this.dataArray))
  });
    this.toastrService.success('News added successfully!', 'Covid Tracker Portal');
    this.router.navigate(['/news']);
  }

}
