import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra est et sagittis vulputate. Nunc rutrum semper varius. Donec elementum, tortor ac laoreet euismod, leo lectus lacinia ex, vel tempor nibh lacus ac purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nullam tempor urna vitae orci ornare, non placerat leo malesuada. Aliquam a leo felis.
<br/><br/>
Fusce eget orci sollicitudin, viverra dolor id, pellentesque magna. Aliquam eu tortor varius, commodo magna tempor, laoreet arcu. In blandit ex et ante ullamcorper malesuada. Etiam in posuere erat, volutpat pulvinar metus. Sed tincidunt dignissim ex non pellentesque. Cras nec gravida ligula, a dignissim dolor. Etiam purus nisl, ultrices non blandit vitae, dignissim id odio.
<br/><br/>
Phasellus justo orci, efficitur id risus vitae, pellentesque consectetur tellus. Morbi pharetra tincidunt dolor feugiat venenatis. Nulla facilisi. Suspendisse potenti. Fusce id pharetra purus. Nunc eu ipsum volutpat, facilisis metus et, faucibus dui. Pellentesque nec libero eget arcu ultricies venenatis. Integer non consequat ex, eget sollicitudin nisl. Mauris at aliquet sem. Nullam consequat eget libero non pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam scelerisque, odio sed interdum dignissim, velit eros aliquam libero, in lobortis nisl metus sed lectus. Sed aliquet erat quis feugiat egestas. Duis eget ligula eget lorem vulputate blandit sit amet sed sapien. Nulla facilisi. Nunc at lacus id orci tempor sodales.
<br/><br/>
Morbi facilisis, est non congue viverra, enim leo malesuada augue, in fermentum lorem odio at diam. Proin condimentum, felis sit amet condimentum varius, ex dolor hendrerit nibh, vitae eleifend dui nibh vitae orci. Duis molestie velit sed nunc placerat congue in quis tellus. Proin pulvinar est lacus, nec blandit sapien convallis ac. In pretium metus nec mauris ullamcorper, vitae porttitor nisi faucibus. Nulla et bibendum quam. Fusce id facilisis felis. Maecenas et aliquam arcu. Donec eu erat eget tortor mollis mattis. Etiam quis commodo purus, vitae imperdiet felis.
<br/><br/>
Nulla posuere lacus augue, non placerat tortor tincidunt quis. Sed sollicitudin justo ut erat finibus, ut suscipit dui cursus. Curabitur non odio sit amet arcu semper finibus. Integer enim ante, congue vitae pellentesque quis, sagittis non ante. Integer vitae tellus neque. Proin venenatis, turpis nec rhoncus dignissim, mi est scelerisque ipsum, sed posuere leo enim sed turpis. Ut dictum massa at purus vulputate, ut mollis libero volutpat. Suspendisse lobortis arcu faucibus, ornare lacus a, bibendum est. Donec feugiat eros sit amet arcu tempor accumsan. In a arcu at nisi vulputate gravida quis a nisl. Ut ac est dolor.`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);
//fincion que calcula
const calcularPorcentajeScroll = ( event ) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log(scrollTop,scrollHeight,clientHeight);
    return (scrollTop / (scrollHeight - clientHeight))*100;
}
//streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );
const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    // tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
})