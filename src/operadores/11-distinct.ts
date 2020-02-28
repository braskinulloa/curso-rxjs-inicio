import { distinct } from 'rxjs/operators';
import { of, from } from 'rxjs';

// const numeros$ = of<number|string>(1,'1',1,1,3,3,2,2,4,4,5,3,1,'1');

// numeros$.pipe(
//     distinct()
// ).subscribe(
//     console.log
// );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X',
    },
    {
        nombre: 'Dr. File'
    }
];

from( personajes ).pipe(
    distinct(p => p.nombre )
).subscribe( console.log );