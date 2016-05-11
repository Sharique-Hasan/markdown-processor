/**
 * @ngdoc controller
 * @name app.markdown.controller:DetailMarkDown
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.markdown')
		.controller('DetailMarkDown', DetailMarkDown);

  /* @ngInject */
	function DetailMarkDown(QueryService, $stateParams, $sce){
		var vm = this;
    let markDownId = $stateParams.id;

    QueryService.Markdown
      .one('get')
      .one(markDownId)
      .get()
      .then((response) => {
        vm.markdown = response;
        vm.markdown.processedHtml = $sce.trustAsHtml(vm.markdown.processedHtml);
      });
	}

}());
