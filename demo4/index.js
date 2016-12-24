var requestStream = Rx.Observable.just('https://api.github.com/users');

var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

responseStream.subscribe(response => {
  console.log(response);
});
