import { Component } from '@angular/core';
import { CustomerService } from './service/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicall';
  customers:any;
  constructor(private service:CustomerService){
    this.service.GetData().subscribe(data=>{
      console.log(data);
      this.customers=data;
    })
  }
}
