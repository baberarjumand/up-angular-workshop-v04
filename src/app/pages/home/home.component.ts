import { CompaniesDbService } from './../../services/companies-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private companyDbService: CompaniesDbService) {}

  ngOnInit(): void {
    this.companyDbService.getAllCompanies().subscribe((companiesArr) => {
      console.log(companiesArr);
    });
  }
}
