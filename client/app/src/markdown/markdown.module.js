/**
 * @ngdoc overview
 * @name app.markdown
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.markdown', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
      .state('Markdown', {
        abstract:true,
        url:'/markdown',
        template:'<ui-view></ui-view>'
      })
      .state('Markdown.list', {
        url:'/list',
        templateUrl:'src/markdown/listMarkDowns.html',
        controller: 'ListMarkDowns as vm'
      })
      .state('Markdown.create', {
        url:'/create',
        templateUrl:'src/markdown/createMarkDown.html',
        controller: 'CreateMarkDown as vm'
      })
      .state('Markdown.detail', {
        url:'/detail/{id}',
        templateUrl:'src/markdown/detailMarkDown.html',
        controller: 'DetailMarkDown as vm'
      });
  }

}());
