import { Tienda } from './tienda';

export class IFruta {
    id: number;
    nombre: string;
    procedencia: string;
    calidad: number;
    precio: number;
    tipo: string;
    tiendasCercanas: number[];
    imagen: string;
};

export class Fruta implements IFruta
{   
    id: number;
    nombre: string;
    procedencia: string;
    calidad: number;
    precio: number;
    tipo: string;
    tiendasCercanas: number[];
    imagen: string;
     
    constructor(o?:IFruta)
    {
        if(o !== undefined) Object.assign(this,o);
    }   
}