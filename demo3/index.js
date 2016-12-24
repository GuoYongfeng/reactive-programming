// SEE CONSOLE TAB FOR OUTPUT!

console.clear();

var streamA = Rx.Observable.of(3, 4);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));
