(function(boplexTest){
  "use strict";

  function Point(name, x, y, onMoved) {
    Boplex.BaseObject.call(this);
    var _logger = new Boplex.Logger("boplexTest.Point");
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
      _logger.log("x:" + _x + ", y: " + _y);
      _x = pos.x;
      _y = pos.y;
      (new Boplex.Event(this, _onMoved)).raise(pos);
      _logger.log("x:" + _x + ", y: " + _y);
    };
  }
  boplexTest.Point = Boplex.inherit(Point, Object);

})(boplexTest);
