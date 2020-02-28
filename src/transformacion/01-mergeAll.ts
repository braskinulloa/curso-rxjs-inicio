import { fromEvent, Observable, of } from "rxjs";
import { debounceTime, map, pluck, mergeAll, catchError, takeWhile } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";
import { GitHubUser } from "../interfaces/github-user.interface";
import { GitHubUsersResp } from "../interfaces/github-users.interface";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//Helpers
const mostrarUsusarios = ( usuarios: GitHubUser[] ) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }    
}

//Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');


// input$.pipe(
//     debounceTime(500),
//     pluck('target', 'value'),
//     map( texto => {
//         return ajax.getJSON(
//             `https://api.github.com/search/users?q=${texto}`
//         );
//     }),
// ).subscribe( res => {
//     res.pipe(
//     ).subscribe( console.log )
// } );

//Usando el merge All
input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GitHubUsersResp>>( texto => {
        if (texto.length>0) {
            return ajax.getJSON(
                `https://api.github.com/search/users?q=${texto}`
            );
        }else{
            return new Observable<GitHubUsersResp>();
        }
    }),
    mergeAll(),//Une los Observables
    pluck<GitHubUsersResp, GitHubUser[]>('items'),
).subscribe( mostrarUsusarios );