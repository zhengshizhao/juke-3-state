'use strict';

juke.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
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
		resolve: {
			artist: function(ArtistFactory, $stateParams){
				return ArtistFactory.fetchById($stateParams.artistId);
			}
		},
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
	$locationProvider.html5Mode(true);
})

