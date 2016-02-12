'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, artists) {

    $scope.artists = artists;

});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, $log, ArtistFactory, PlayerFactory, $rootScope, $stateParams) {

  // $scope.$on('viewSwap', function (event, data) {

  //   if (data.name !== 'oneArtist') return $scope.showMe = false;
  //   $scope.showMe =
    $scope.artistId = $stateParams.artistId;
    ArtistFactory.fetchById($stateParams.artistId)
    .then(artist => {
      $scope.artist = artist;
    })
    .catch($log.error);



  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

});
