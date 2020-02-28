import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


const url = 'http://httpbin.osrg/delay/1';

const manejaError = ( res: AjaxError ) => {
    console.warn('error:', res.message );
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

// obs$.pipe(
//     catchError( manejaError )
// ).subscribe( data => console.log('getJson:', data) );
// obs2$.pipe(
//     catchError( manejaError )
// ).subscribe( data => console.log('ajax:', data) );

//Otra forma de manejar el error
obs$.pipe(
    catchError(manejaError)//si lo incluyo se dispara el next con el array vacío y luego el complete
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete')        
});
// obs2$.subscribe( data => console.log('ajax:', data) );

