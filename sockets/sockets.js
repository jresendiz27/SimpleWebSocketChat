var iolib = require('socket.io');
//creating the prototype
function socketManagement() {
};

socketManagement.prototype.createSocket = function (serverInstance, callback) {
  try {
    this.socket = iolib.listen(serverInstance);
    callback(null, this.socket);
  } catch (err) {
    callback(err, null);
  }
}
module.exports = socketManagement;