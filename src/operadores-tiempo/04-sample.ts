import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

//sample() emite el ultimo valor emitido por el Observable
//hasta que el Observable dentro del sample emita un valor


const interval$ = interval(500);
const click$ = fromEvent( document, 'click');

interval$.pipe(
    sample(click$)
).subscribe( console.log );

