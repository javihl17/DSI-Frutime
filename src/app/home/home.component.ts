import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Contacto, ViewContacto } from '../contacto';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,
    private global: GlobalService) { }

  ngOnInit() {
  }
  public goToFrutas() {
    this.router.navigate(['/frutas']);
  }
  public goToTiendas() {
    this.router.navigate(['/tiendas']);
  }
  public goToEscaner() {
    this.router.navigate(['/scanner']);
  }
}
