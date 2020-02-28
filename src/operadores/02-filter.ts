import { filter, map } from 'rxjs/operators';
import { range, of, from, fromEvent } from 'rxjs';


// range(1,10).pipe(
//     filter( val => val%2 === 1 )
// ).subscribe( console.log );

// range(20,40).pipe(
//     filter( (val, i) => {
//         console.log('index:', i);
//         return val%2 === 1;
//     })
// ).subscribe( console.log );


const personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];
// of(...personajes).pipe(
//     filter( (val, i) => {
//         console.log('index:', i);
//         return val['tipo'] === 'heroe';
//     })
// ).subscribe( console.log );

// of(...personajes).pipe(
from(personajes).pipe(
    filter( (val, i) => {
        console.log('index:', i);
        return val['tipo'] === 'heroe';
    })
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code ),//<KeyboardEvent, string>
    filter( key => key === 'Enter')
);

keyup$.subscribe(console.log)

