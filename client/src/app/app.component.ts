import { Component } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  companys: Company[];

  constructor(private companyService: CompanyService) {
    this.companyService.getCompany().subscribe(data => {
      this.companys = data;
    });
  }
}
