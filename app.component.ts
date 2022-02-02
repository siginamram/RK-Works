import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WDCWD';
  empData: any;
  constructor(private httpclient:HttpClient) {}
 ngOnInit(): void {
     this.httpclient.get<any>("http://dummy.restapiexample.com/api/v1/employees").subscribe((empdata)=>{
             this.empData = empdata.data;
     });
 }
}
