const jwt= require('jsonwebtoken');
var token=jwt.sign({name:'abc'},"privatekey");

console.log('token', token);

var decoded=jwt.verify(token,"privatekey");

console.log('decoded', decoded);