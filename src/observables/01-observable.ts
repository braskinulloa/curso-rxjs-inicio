import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.log('error [obs]: ', error),
    complete: () => console.log('completado [obs]')       
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');
    
    //forzar error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subs.complete();
    subs.next('Este no se muestra luego del complete');
});


// obs$.subscribe ( res => console.log(res));
// obs$.subscribe ( console.log ) ;
// obs$.subscribe (
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.log('completado')            
// ) ;

obs$.subscribe(observer);