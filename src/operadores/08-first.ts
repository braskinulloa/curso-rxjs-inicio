import { first, tap, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

//first toma el primer valor y completa el observable pero puede tener condicionales

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    // first()// es igual a poner take(1)
    tap<MouseEvent>( console.log ),
    map( ({ clientX, clientY }) => ({ clientX, clientY }) ),
    first( event => event.clientY >= 150 )// es igual a poner take(1)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
    
});
