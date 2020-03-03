import { interval, of, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";

const numero$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000).pipe( take(3) );
const letras$ = of('a', 'b', 'c').pipe( delay(3500) );

// forkJoin(
//     numero$,
//     interval$,
//     letras$
// ).subscribe( res => {
//     console.log('numeros:', res[0]);
//     console.log('intervalo:', res[1]);
//     console.log('letras:', res[2]);
// });

forkJoin({
    num: numero$,
    int: interval$,
    let: letras$
}).subscribe( res => {
    console.log(res);
    // console.log(res.letras$);
});