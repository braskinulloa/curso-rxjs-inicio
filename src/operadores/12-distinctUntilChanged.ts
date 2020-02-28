import { distinctUntilChanged } from 'rxjs/operators';
import { of, from } from 'rxjs';
// distinctUntilChanged Se emite siempre cuando el valor anterior no
//sea el mismo

const numeros$ = of<number|string>(1,'1',1,1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
    distinctUntilChanged()
).subscribe(
    console.log
);

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
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
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
    // distinctUntilChanged(p => p.nombre )
    distinctUntilChanged( (anterior, actual)=> anterior.nombre === actual.nombre)
).subscribe( console.log );