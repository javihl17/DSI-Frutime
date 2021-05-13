import { NgModule } from '@angular/core';
import { Routes, Router,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrutasComponent } from './frutas/frutas.component';
import { FrutaComponent } from './fruta/fruta.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ScannerComponent } from './scanner/scanner.component';


const routes: Routes = [
                        {path:'home',component:HomeComponent},
                        {path:'',redirectTo:'/home',pathMatch:'full'},
                        {path:'frutas',component:FrutasComponent},
                        {path:'fruta/:id',component:FrutaComponent},
                        {path:'tiendas',component:TiendasComponent},
                        {path:'tienda/:id',component:TiendaComponent},
                        {path:'scanner',component:ScannerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
