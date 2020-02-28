import { distinctUntilKeyChanged } from 'rxjs/operators';
import { of, from } from 'rxjs';
// distinctUntilKeyChanged Se emite siempre cuando el valor del key anterior no
//sea el mismo

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
    distinctUntilKeyChanged('nombre')
).subscribe( console.log );