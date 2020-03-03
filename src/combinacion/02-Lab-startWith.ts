import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";


//Referencias  
const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Cargando...';

const body = document.querySelector('body');


//Stream

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe(
    res => {
        if( res === true ){
            body.append(loading);
        }else{
            document.querySelector('.loading').remove();
        }
        console.log(res); 
    }
);