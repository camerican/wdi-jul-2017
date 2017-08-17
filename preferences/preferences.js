'use strict';

module.exports = (function(){
  function Preference( obj ) {
    this.name = obj.name || "Anonymous";
    this.id = this.maxId() + 1;
    this.color = obj.color || "grey";
    this.sportsTeam = obj.sportsTeam || "Hometeam";
    this.constructor.list.push(this);
  }
  Preference.list = [];
  Preference.prototype.maxId = function() {
      if(!this.constructor.list) return -1;
      return this.constructor.list.map( c => c.id).reduce( (max,c) => Math.max(max,c), -1 );
  };
  Preference.prototype.findId = function(id) {
    return this.constructor.list.find( c => c.id == id );
  };
  return Preference;
})();