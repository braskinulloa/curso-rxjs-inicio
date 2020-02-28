import { filter, map, tap } from 'rxjs/operators';
import { range } from 'rxjs';

const numeros$ = range(1,5);



numeros$.pipe(
    tap( x => console.log('antes', x) ),
    map( val => val*10 ),
    tap({
        next: val => console.log('despues', val),
        complete: () => console.log('se acabo todo')
    })
)
.subscribe( val => console.log('subs', val));