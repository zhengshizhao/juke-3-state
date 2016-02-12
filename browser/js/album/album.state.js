'use strict';

juke.config(function($stateProvider) {
	$stateProvider.state('albums', {
		templateUrl: '/js/templates/allAlbums.template.html',
		url: '/',
		controller: 'AlbumsCtrl'
	})
})