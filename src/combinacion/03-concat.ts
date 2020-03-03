import { interval, concat, of } from "rxjs";
import {  take } from "rxjs/operators";

const interval$ = interval(3000);

concat( 
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    [4, 5, 6, 7],
    of('hola')
).subscribe( console.log )