import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    var x = this.route.snapshot.paramMap.get('order')
    console.log('DetailsComponent: ' + x);
  }

}
