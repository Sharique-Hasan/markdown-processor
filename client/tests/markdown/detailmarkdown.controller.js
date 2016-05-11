(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: DetailMarkDown', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.markdown'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('DetailMarkDown', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
