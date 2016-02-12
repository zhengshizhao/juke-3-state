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
		controller: 'AlbumsCtrl'
	})
.state('album', {
		templateUrl: '/js/templates/oneAlbum.template.html',
		url: '/albums/:albumId',
		controller: 'AlbumCtrl'
	})
 $locationProvider.html5Mode(true);
})

juke.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when('/artists/:artistId', '/artists/:artistId/albums')
	$stateProvider
	.state('artists', {
		templateUrl: '/js/templates/allArtists.template.html',
		url: '/artists',
		resolve: {
			artists: function(ArtistFactory){
				return ArtistFactory.fetchAll();
			}
		},
		controller: 'ArtistsCtrl'
	})
	.state('artist', {
		templateUrl: '/js/templates/oneArtist.template.html',
		url: '/artists/:artistId',
		controller: 'ArtistCtrl'
	})
	.state('artist.albums', {
		templateUrl: '/js/templates/artistAlbums.template.html',
		url: '/albums'
		//controller: 'ArtistCtrl'
	})
	.state('artist.songs', {
		templateUrl: '/js/templates/artistSongs.template.html',
		url: '/songs'
		//controller: 'ArtistCtrl'
	})
})

