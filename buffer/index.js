// 支持的编码
console.log(Buffer.isEncoding('utf-8'));
console.log(Buffer.isEncoding('binary'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('ucs2'));
console.log(Buffer.isEncoding('base64'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding('gbk'));

console.log(Buffer.isEncoding('gb2312'));


// 创建
var a = new Buffer(0);
console.log(a);
var a2 = new Buffer(0);
console.log(a2);
var a10 = new Buffer(10);
console.log(a10);
var b = new Buffer(['a','b',12]);
console.log(b);
var b2 = new Buffer('你好','utf-8');
console.log(b2);

// 类方法
Buffer.isEncoding('utf-8');
Buffer.isBuffer(new Buffer('a'));
Buffer.byteLength(str2, 'utf8');
var b3 = Buffer.concat([b1,b2],8);
Buffer.compare(a1,a2)

// Buffer复制函数 
buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])。
// Buffer填充函数
buf.fill(value[, offset][, end])
// Buffer裁剪
buf.slice([start][, end])

// 写入
buf.write('从第30位写入', 30);

// 读取
buf.toString();
