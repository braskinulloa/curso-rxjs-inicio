import { interval, timer } from "rxjs"



const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')      
} 

const hoyEn5seg = new Date();
hoyEn5seg.setSeconds( hoyEn5seg.getSeconds() + 5 );

const interval$ = interval(2000);

// const timer$ = timer(0);
//interval de 1 seg que inicia en 2 seg
// const timer$ = timer(2000, 1000);

const timer$ = timer( hoyEn5seg );

console.log('Inicio');

// interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('Fin');