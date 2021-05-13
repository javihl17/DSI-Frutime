import { Fruta } from './fruta';


export class ITienda {
    id: number;
    nombre: string;
    direccion: string;
    calidad: number;//0-5
    horario: string;
    frutas: number[];
    imagen: string;   
};

export class Tienda implements ITienda
{   
    id: number;
    nombre: string;
    direccion: string;
    calidad: number;//0-5
    horario: string;
    frutas: number[];  
    imagen: string;  
     
    constructor(o?:ITienda)
    {
        if(o !== undefined) Object.assign(this,o);
    }   
}