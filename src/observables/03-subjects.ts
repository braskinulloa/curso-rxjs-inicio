import { Observable, Observer, Subscriber, Subject, interval } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('completado')       
};

const intervalo$ = new Observable<number>( subs => {
    const intervalId =  setInterval( () => subs.next( Math.random() ), 1000);

    return () => { 
        clearInterval( intervalId ); 
        console.log('Intervalo destruido');
        
    }
});

// const subs1 = intervalo$.subscribe( rmd => console.log('subs1', rmd) );
// const subs2 = intervalo$.subscribe( rmd => console.log('subs2', rmd) );

/**
 * 1- Casteo multiple
 * 2- tambien es Observer
 * 3- Se manejan Next, error y complete
 */
const subject$ = new Subject();

const intervalSubscription = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {
    subject$.next(10);
    subject$.complete();
    intervalSubscription.unsubscribe();
}, 5000);