import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Fruta } from '../fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private global:GlobalService) { }
  public id;

  public fruta:Fruta;

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params['params']);
      this.id =params['params']['id'];
      if(this.id>0)
        this.fruta=this.global.readFruta(this.id);
      else 
        this.fruta=new Fruta();
    })
  }
  
  public getRange(n){
    return Array.from(Array(n).keys());
  }

  public getTienda(id){
    return this.global.readTienda(id);
  }

  public goToFruta(id){
    this.router.navigate(['/tienda', id]);
  }
}
