import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  baseUrl: any;
  dataSource: any;
  constructor(private auth: AuthService){
    this.baseUrl = auth.baseUrl;
    console.log(this.baseUrl);
    this.auth.getAPI('/post').subscribe((res) => {
      console.log(res, 'api responseeeeee');
      if (res) {
        this.dataSource = res.data;
        console.log(this.dataSource);
      }
    });
  }

  ngOnInit(): void {
  }

}
