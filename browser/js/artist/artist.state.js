'use strict';

juke.config(function($stateProvider) {
	$stateProvider.state('artists', {
		templateUrl: '/js/templates/allArtists.template.html',
		url: '/artists',
		controller: 'ArtistsCtrl'
	})
})