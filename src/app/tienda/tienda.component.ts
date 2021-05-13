import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Tienda } from '../tienda';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private global:GlobalService) { }
  public id;

  public tienda:Tienda;

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params['params']);
      this.id =params['params']['id'];
      if(this.id>0)
        this.tienda=this.global.readTienda(this.id);
      else 
        this.tienda=new Tienda();
    })
  }
  
  public getRange(n){
    return Array.from(Array(n).keys());
  }

  public getFruta(id){
    return this.global.readFruta(id);
  }
  public goToFruta(id){
    this.router.navigate(['/fruta', id]);
  }
}
