import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss']
})
export class TiendasComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) tabladatos: MatTable<any>;

  constructor(public router: Router, public route: ActivatedRoute,
              private global:GlobalService,private _snackBar: MatSnackBar) { }

  ngOnInit() {}

  public displayedColumns: string[] = ['imagen','nombre','direccion','calidad'];
  public displayedColumns_movile: string[] = ['1','2'];
  
  public search_texto:string="";
  
  public getData()
  {
    if(this.search_texto!=''){
      let resultados = this.global.datos_tienda.filter(t=>t.nombre.toLowerCase().startsWith(this.search_texto.toLowerCase()));
      if (resultados.length == 0) {
        resultados.push(this.global.tienda_empty);
      }
      return resultados;
    }
    else
      return this.global.datos_tienda
  }


  public getRange(n){
    return Array.from(Array(n).keys());
  }

  public goToTienda(id){
    if (id == 0)
      return;
    this.router.navigate(['/tienda', id]);
  }

  public getNTiendas()
  {
    return this.global.getNTiendas()
  }

}
