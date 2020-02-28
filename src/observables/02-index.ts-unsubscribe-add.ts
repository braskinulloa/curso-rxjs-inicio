import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completado')       
};

const intervalo$ = new Observable( subs => {
    //crear contador 1, 2, 3, 4, ...
    let num: number = 0;
    const intervalo = setInterval( ()=>{
        //cada segundo
        subs.next(num);
        console.log(num);
        
        num++;        
    }, 1000);
    
    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(intervalo);
        console.log('Intervalo destruido');
    }
});

// const subs1 = intervalo$.subscribe( num => console.log('Num: ', num));
// const subs2 = intervalo$.subscribe( num => console.log('Num: ', num));
// const subs3 = intervalo$.subscribe( num => console.log('Num: ', num));

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
    // subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    subs1.unsubscribe();
    console.log('completado tieme out');    
}, 3000);
