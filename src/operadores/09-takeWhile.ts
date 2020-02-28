import { map, takeWhile } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map( ({ x, y }) => ({x, y}) ),
    // takeWhile( ({ y }) => y <= 150 )
    takeWhile( ({ y }) => y <= 150, true )//incluye el ultimo valor
)
.subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
});

