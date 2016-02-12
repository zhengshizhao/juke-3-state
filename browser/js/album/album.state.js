'use strict';

juke.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('/', '/albums');
	$stateProvider.state('albums', {
		templateUrl: '/js/templates/allAlbums.template.html',
		url: '/albums',
		resolve: {
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll()
			}
		},
		//moreDAta: function(albums){} ## it will wait for albums to inject it
		controller: 'AlbumsCtrl'
	})
.state('album', {
		templateUrl: '/js/templates/oneAlbum.template.html',
		url: '/albums/:albumId',
        resolve: {
			album: function(AlbumFactory,$stateParams){
				return AlbumFactory.fetchById($stateParams.albumId)
			}
		},
		controller: 'AlbumCtrl'
	})
 $locationProvider.html5Mode(true);
})
