import { Injectable } from '@angular/core';
import { Fruta } from './fruta';
import { Tienda } from './tienda';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {}

  public datos_fruta: Fruta[] = [
    {id: 1, nombre: 'Frambuesas', procedencia: 'Granada, Andalucía', calidad: 4, precio: 1.2, tipo: 'Baya', tiendasCercanas:[1,2,3], imagen: "/assets/frambuesas.png" },
    {id: 2, nombre: 'Fresas', procedencia: 'Oviedo, Asturias', calidad: 3, precio: 1.3, tipo: 'Baya', tiendasCercanas:[1,4,5], imagen: "/assets/fresas.png" },
    {id: 3, nombre: 'Fruta de la Pasión', procedencia: 'Valencia, Comunidad Valenciana', calidad: 4, precio: 1.2, tipo: 'Exótica', tiendasCercanas:[2,4], imagen: "/assets/fruta de la pasion.png" },
    {id: 4, nombre: 'Lima', procedencia: 'Córdoba, Andalucia', calidad: 3, precio: 0.9, tipo: 'Cítrico', tiendasCercanas:[1,3,5], imagen: "/assets/lima.png" },
    {id: 5, nombre: 'Limón', procedencia: 'Frist, Alemania', calidad: 2, precio: 2, tipo: 'Cítrico', tiendasCercanas:[2,5], imagen: "/assets/limon.png" },
    {id: 6, nombre: 'Pera', procedencia: 'Barcelona, Cataluña', calidad: 1, precio: 2.1, tipo: 'Dulce', tiendasCercanas:[3,4,5], imagen: "/assets/pera.png" },
    {id: 7, nombre: 'Plátanos', procedencia: 'La Palma, Islas Canarias', calidad: 5, precio: 1.3, tipo: 'Dulce', tiendasCercanas:[1,2,4], imagen: "/assets/platanos.png" },
    {id: 8, nombre: 'Mango', procedencia: 'Alberca,Puerto Rico', calidad: 3, precio: 1.1, tipo: 'Exótica', tiendasCercanas:[1,2,3,4], imagen: "/assets/1-2-mango-png-thumb.png" },
    
  ];

  public datos_tienda: Tienda[] = [
    {id: 1, nombre: 'Frutería Paco',direccion: 'Calle del Rocio/4,28911 Leganés, Madrid', calidad:3, horario: '9:00-22:00', frutas: [1,2,4,6,7,8], imagen: "/assets/fruteria 1.jpg"},
    {id: 2, nombre: 'Frutería de la Abuela',direccion: 'Vía Romana/20,28911 Leganés, Madrid', calidad:4, horario: '8:00-18:00', frutas: [1,3,5,7,8], imagen: "/assets/fruteria 2.jpg"},
    {id: 3, nombre: 'Carrefour', direccion: 'Calle de los Caídos en Mayo/33,28911 Leganés, Madrid', calidad:3, horario: '7:00-19:00', frutas: [1,4,6,8], imagen: "/assets/rebajas-carrefour.jpg"},
    {id: 4, nombre: 'El Dragón Rojo',direccion: 'Calle de la Música/1,28911 Leganés, Madrid', calidad:2, horario: '8:30-23:00', frutas: [2,3,6,7,8], imagen: "/assets/fruteria 3.jpg"},
    {id: 5, nombre: 'Lidl',direccion: 'Calle 33/20,28911 Leganés, Madrid', calidad:4, horario: '8:30-22:00', frutas: [2,4,5,6], imagen: "/assets/lidl.jpg"},
    
  ];

  public tienda_empty: Tienda = {id: 0, nombre: '¡Vaya! No encontramos resultados',direccion: 'Prueba con otro nombre', calidad:0, horario: '00:00-24:00', frutas: [], imagen: "/assets/limon_detective.jpg"};
  
  public fruta_empty: Fruta = {id: 0, nombre: '¡Vaya! No encontramos resultados', procedencia: 'Nuestra Gran empresa', calidad: 0, precio: 0.0, tipo: 'Detective', tiendasCercanas:[], imagen: "/assets/limon_detective.jpg"};
  

  public readFruta(id:number):Fruta
  {
    for (let item of this.datos_fruta) {
        if (item.id == id){
          return new Fruta(item);
        }
    }
  }
  public getNFrutas()
  {
    return this.datos_fruta.length;
  }
  public readTienda(id:number):Tienda
  {
    for (let item of this.datos_tienda) {
        if (item.id == id){
          return new Tienda(item);
        }
    }
  }
  public getNTiendas()
  {
    return this.datos_tienda.length;
  }
  
}
