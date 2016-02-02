var EventEmitter = require('events').EventEmitter;

function asyncFunc() {
  var ev = new EventEmitter;
  console.log('in asyncFunc');
  setTimeout(()=>{
    ev.emit('done', 'foo', 'bar');
  }, 1000);
  return ev;
}

var async = asyncFunc();
async.on('done', (arg1, arg2)=>{
  console.log(arg1, arg2);
});
async.on('done', ()=>{
  console.log("hoge");
});
