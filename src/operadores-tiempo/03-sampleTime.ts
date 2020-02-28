import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

//sampleTime() emite el ultimo valor que sale en cierto tiempo

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    sampleTime(2000),//mas óptimo
    map( ({ x, y }) => ({ x, y })),
    // sampleTime(2000)//ponerlo acá consume mas memoria porque primero procesa el map
).subscribe( console.log );
