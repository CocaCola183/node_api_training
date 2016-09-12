const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
// 修改监听器的最大数量，默认是10
myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);

// 注册事件前触发的事件
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    myEmitter.on('event', () => {
      console.log(`${event}事件被注册了`);
    });
  }
});

myEmitter.once('removeListener', (event, listener) => {
	console.log(`删除事件: ${event}`);
});

// 简单的使用
myEmitter.on('event', function (a, b) {
  console.log(`event事件执行器获取到参数: ${a}, ${b}`);
  // console.log(`非箭头执行器中this指向事件对象实例myEmitter:\n ${this}`);
});

// 注意箭头函数的坑，这里和上一个监听器相比，this是空对象
myEmitter.on('eventArrow', (a, b) => {
	console.log(`eventArrow事件执行器获取到参数: ${a}, ${b}`);
  // console.log(`非箭头执行器中this指向一个空对象:\n ${this}`);
});

// 只能触发一次的事件
myEmitter.once('eventOnce', (a, b) => {
	console.log(`eventOnce事件只能被触发一次: ${a}, ${b}`);
});

// 建议，一定要添加error监听事件
myEmitter.once('error', (err) => {
	console.log('error事件捕获到异常: ', err);
});

// 另外一种注册事件的方式
myEmitter.addListener('addListener', () => {
	console.log('注册了新的事件addListener');
});

// 为event事件处理器链的头部，添加一个处理器
myEmitter.prependListener('event', (a, b) => {
	console.log(`触发了event事件处理器链头部添加的处理器，参数: ${a}, ${b}`);
});

myEmitter.prependOnceListener('event', (a, b) => {
	console.log(`触发了event事件处理器链头部添加的一次性处理器，参数: ${a}, ${b}`);
});

// 获取所有事件的事件名数组
console.log(`所有监听事件: ${myEmitter.eventNames()}`);

// 获取最大监听器限制
console.log(`最大监听器数量: ${myEmitter.getMaxListeners()}`);

// 获取指定事件监听器数量
console.log(`event事件监听器数量: ${myEmitter.listenerCount('event')}`);

// 获取指定事件监听器
// console.log(`event事件监听器: ${myEmitter.listeners('event')}`);

myEmitter.emit('event', 'a', 'b');
myEmitter.emit('event', 'a', 'b');
myEmitter.emit('eventArrow', 'a', 'b');
myEmitter.emit('eventOnce', 'a', 'b');
myEmitter.emit('eventOnce', 'a', 'b');

// 发射一个错误
// myEmitter.emit('error', new Error('whoops'));

// 删除一个事件的所有监听器
myEmitter.removeAllListeners('eventArrow');
// myEmitter.removeListener(eventName, listener);




