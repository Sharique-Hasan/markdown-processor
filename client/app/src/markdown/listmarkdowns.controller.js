/**
 * @ngdoc controller
 * @name app.markdown.controller:ListMarkDowns
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.markdown')
		.controller('ListMarkDowns', ListMarkDowns);

  /* @ngInject */
	function ListMarkDowns(QueryService){
		var vm = this;

		QueryService
      .Markdown
      .one('get')
      .get()
      .then((list) => {
        vm.list = list;
      });
	}

}());
