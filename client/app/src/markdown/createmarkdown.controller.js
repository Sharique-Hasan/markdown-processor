/**
 * @ngdoc controller
 * @name app.markdown.controller:CreateMarkDown
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.markdown')
		.controller('CreateMarkDown', CreateMarkDown);

  /* @ngInject */
	function CreateMarkDown(Restangular, $state){
		var vm = this;
    vm.markdown = {};

    vm.create = (markdown) => {
      markdown.markdown = processMarkDown(markdown.markdown);
      debugger;
      Restangular.all('markdown/save')
        .post(markdown)
        .then((response) => {
          $state.go('Markdown.detail', {id: response._id});
        });
    };

    function processMarkDown(markdown){
      return markdown.split('').map((char) => {
        if(char.charCodeAt(0) === 10){
          char = '\n';
        }
        return char;
      }).join('');
    }

  }

}());
