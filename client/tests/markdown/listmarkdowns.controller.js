(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: ListMarkDowns', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.markdown'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('ListMarkDowns', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
