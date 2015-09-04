function getShortMessages(messages) {
    return messages.map(function(msg){
      return msg.message;
    }).filter(function(m){
      return m.length < 50;
    });
  }

module.exports = getShortMessages
