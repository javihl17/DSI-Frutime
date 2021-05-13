import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }
  public goToFrutas()
  {
    this.router.navigate(['/fruta/5']);
  }
}
