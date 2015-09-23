(function(boplexTest){
  "use strict";

  function Point(name, x, y, onMoved) {
    Boplex.BaseObject.call(this);
    this.name = name;
    var _x = x;
    var _y = y;
    var _onMoved = onMoved;

    function _getName(t){
      return t.name;
    }

    Point.prototype.getName = function(){
      return _getName.call(this, this);
    };

    Point.prototype.getPosition = function(){
      return {x: _x, y: _y};
    };

    Point.prototype.setPosition = function(pos){
      _x = pos.x;
      _y = pos.y;
      (new Boplex.Event(this, _onMoved)).raise(pos);
    };
  }
  Boplex.inherit(boplexTest, Point, Boplex.BaseObject);

})(boplexTest);
