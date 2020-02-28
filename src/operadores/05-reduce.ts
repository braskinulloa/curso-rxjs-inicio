import { reduce, take, tap } from 'rxjs/operators';
import { interval } from 'rxjs';


const numbers = [1, 2, 3, 4, 5];

const totalReducer = ( acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}
//reduce de javascript
const total = numbers.reduce( totalReducer, 0 );

console.log('tota arr:', total);

//reduce de rxjs
interval(1000).pipe(
    take(3),//completa el observable luego de cierta cantidad de veces
    tap(console.log),
    reduce( totalReducer, 5 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});
