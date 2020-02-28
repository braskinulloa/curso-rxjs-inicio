import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged } from "rxjs/operators";

//throttleTime() emite el primer valor de un periodo de tiempo

const click$ = fromEvent( document, 'click');

// click$.pipe(
//     throttleTime(3000)
// ).subscribe( console.log );

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    // throttleTime(1000),
    throttleTime(1000, asyncScheduler, {//recibe ademas el ultimo elemento
        leading: true,
        // leading: false, //funciona parecido a debounceTime
        trailing:true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log );