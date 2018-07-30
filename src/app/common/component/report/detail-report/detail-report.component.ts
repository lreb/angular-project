import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-report',
  templateUrl: './detail-report.component.html',
  styleUrls: ['./detail-report.component.css']
})
export class DetailReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  view(id) {
    //this.router.navigate(['/', 'red-pill']);
    console.log("view " + id)
    this.router.navigate(['/ReportDetail/see', id]);
  }

  edit(id) {
    console.log("edit " + id)
    this.router.navigate(['ReportDetail','scan', id]);
    
  }
}
