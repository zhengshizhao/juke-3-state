'use strict';

juke.config(function($stateProvider) {
	$stateProvider.state('albums', {
		templateUrl: '/js/templates/allAlbums.template.html',
		url: '/albums',
		controller: 'AlbumsCtrl'
	})
})

juke.config(function($stateProvider) {
	$stateProvider.state('album', {
		templateUrl: '/js/templates/oneAlbum.template.html',
		url: '/albums/:albumId',
		controller: 'AlbumCtrl'
	})
})