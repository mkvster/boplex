(function(Boplex){
  "use strict";

  function BaseObject() {
    BaseObject.prototype.getClassName = function() {
      return Boplex.getFuncName((this).constructor);
    };
  }

  function publish($x){
    $x.BaseObject = BaseObject;
  }

  publish(Boplex);

})(Boplex);
