(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: QueryService', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.core'));

    var QueryService;

    beforeEach(inject(function($injector){

      QueryService = $injector.get('QueryService');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
