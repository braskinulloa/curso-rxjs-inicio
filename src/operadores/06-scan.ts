import { scan, reduce, map } from 'rxjs/operators';//scan => similar al reduce con la 
import { from } from 'rxjs';
//diferencia que devuelve los valores en cada iteracion


const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, curr) => {
//     return acc + curr;
// }

const totalAcumulador = (acc, curr) =>  acc + curr;

//reduce
from(numeros).pipe(
    reduce( totalAcumulador, 0)
)
.subscribe(
    console.log    
);
//scan
from(numeros).pipe(
    scan( totalAcumulador, 0)
)
.subscribe(
    console.log    
);

//Redux - Ejemplo parecido al dicho patrón (maneja la aplicación en un 
//objeto global)
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' }
];

const state$ = from( user ).pipe(
    scan<Usuario>((acc, cur ) => {
        return { ...acc, ...cur }}, { edad: 33 })
);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe( console.log );