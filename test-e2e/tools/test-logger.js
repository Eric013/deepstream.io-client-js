var events = require( 'events' ),
    util = require( 'util' );

var Logger = function() {
    this.logs = [];
    this.lastLog = null;
    this.isReady = true;
};

util.inherits( Logger, events.EventEmitter );

Logger.prototype.log = function( logLevel, event, logMessage ) {
    var log = {
        level: logLevel,
        event: event,
        message: logMessage
    };

    this.logs.push( log );
    this.lastLog = log;
};

Logger.prototype.setLogLevel = function(){};

module.exports = Logger;