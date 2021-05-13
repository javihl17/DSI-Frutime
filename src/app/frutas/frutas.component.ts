import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute,
    private global:GlobalService) { }

  
  public search_texto:string="";
  ngOnInit() {
  }

  public getFrutas(){
    if(this.search_texto!=''){
      let resultados = this.global.datos_fruta.filter(t=>t.nombre.toLowerCase().startsWith(this.search_texto.toLowerCase()));
      if (resultados.length == 0) {
        resultados.push(this.global.fruta_empty);
      }
      return resultados;
    }
    else
      return this.global.datos_fruta
  }

  public goToFruta(id){
    if (id == 0)
      return;
    this.router.navigate(['/fruta', id]);
  }
}
