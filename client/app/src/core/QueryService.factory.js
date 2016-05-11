/**
 * @ngdoc service
 * @name app.core.QueryService
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.core')
		.factory('QueryService', QueryService);

  /* @ngInject */
  function QueryService(Restangular){
		return {
			Markdown: Restangular.service('markdown')
		};

	}

}());
