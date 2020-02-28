import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";

//auditTime() Emite el ultimo valor emitido por el Observable en un
//período de tiempo


const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map( ({ x, y }) => ({ x, y })),
    tap(val => console.log('tap', val)),
    auditTime(5000)
).subscribe( console.log );

