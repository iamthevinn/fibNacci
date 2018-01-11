function fib() {
  let prev = 0;
  let current = 0;

  function nacci() {
    let next = prev + current;
    if (next === 0) {
      console.log(1);
      current++
    } else {
      console.log(next)
      prev = current;
      current = next;
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"