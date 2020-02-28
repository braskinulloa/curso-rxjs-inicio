import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';
//con error
// const url = 'https://api.github.com/usersXX?per_page=5';

const manejaErrores = ( response: Response ) => {
    if (!response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
} 

const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( res => res.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error de ususarios', err))

//la única forma de que se lance un error es lanzarlo, para eso
//es la funcion manejaErrores
// fetchPromesa
//     .then( manejaErrores )
//     .then( res => res.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error de ususarios', err));

//Usando Rxjs
const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);    
}
ajax( url ).pipe(
    pluck( 'response' ),
    // catchError( err => { 
    //     console.warn('error en:', err);
    //     //puede retornar un error u otro observable
    //     return of([]);        
    // })//captura cualquier error del Observable
    catchError( atrapaError )
).subscribe( users => console.log('ususarios:', users) );
    

