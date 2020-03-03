import { fromEvent, of } from "rxjs";
import { tap, pluck, map, mergeMap, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//Helper

const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe( pluck('response', 'token'),
    catchError( err => of('xxx')));

//creando formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitButton = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitButton.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitButton );
document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent<Event>( form, 'submit').pipe(
    tap( ev => ev.preventDefault() ),
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    // mergeMap( peticionHttpLogin )
    // switchMap( peticionHttpLogin )
    exhaustMap( peticionHttpLogin )
);
submitForm$.subscribe( token => console.log(token) );


