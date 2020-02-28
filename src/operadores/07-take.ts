import { take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const numeros$ = of(1,2,3,4,5);


numeros$.pipe(
    tap( t => console.log('tap', t) ),
    take(3)//solo emite el observable 3 veces
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('comlete')    
});