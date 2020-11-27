import { Company } from './../../model/company.model';
import { CompaniesDbService } from './../../services/companies-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  companiesArr: Company[] = [];
  isLoading = true;

  constructor(private companyDbService: CompaniesDbService) {}

  ngOnInit(): void {
    this.companyDbService.getAllCompanies().subscribe((tempCompaniesArr) => {
      console.log(tempCompaniesArr);
      this.companiesArr = tempCompaniesArr;
      this.isLoading = false;

      // setTimeout(() => {
      //   this.isLoading = false;
      // }, 5000);
    });
  }
}
