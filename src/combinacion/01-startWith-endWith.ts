import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

// const numeros$ = of(1, 2, 3).pipe( startWith(0) );
// const numeros$ = of(1, 2, 3).pipe( startWith(2) );
const numeros$ = of(1, 2, 3).pipe( 
    // endWith(2) 
    endWith('a', 'b', 'c') 
    );

numeros$.subscribe( console.log )