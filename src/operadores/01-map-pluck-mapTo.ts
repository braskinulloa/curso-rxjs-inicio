import { mapTo } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupMapTo$ = keyup$.pipe(
    mapTo('key pressed')
);

keyupMapTo$.subscribe( code => console.log('mapTo', code));