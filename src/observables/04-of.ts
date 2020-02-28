import { of } from "rxjs";

// of () //crea observables sincronos en base a un listado de elementos

// const obs$ = of( 1, 2, 3, 4, 5, 6 );
const obs$ = of<number>( ...[1, 2, 3, 4, 5, 6], 1, 2, 3 );
// const obs$ = of( [1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

obs$.subscribe(
    next => console.log('next ', next),
    null,
    () => console.log('terminó la secuencia')
);

console.log('Fin del observable');
