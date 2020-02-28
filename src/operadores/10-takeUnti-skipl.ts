import { takeUntil, skip, tap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';


const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);


const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap( () => console.log('click antes')),
    skip(3),
    tap( () => console.log('click despues')),
);

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('complete')
});