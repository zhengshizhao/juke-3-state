'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */


juke.controller('AlbumCtrl', function ($scope, $log, PlayerFactory, AlbumFactory, $stateParams) {

  $scope.albumId = $stateParams.albumId;
  console.log($scope.albumId);
  // $scope.$on('viewSwap', function (event, data) {
    // if (data.name !== 'oneAlbum') return $scope.showMe = false;
    // $scope.showMe = true;
    AlbumFactory.fetchById($scope.albumId)
    .then(album => {
      $scope.album = album;
      })
    .catch($log.error);


  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */


juke.controller('AlbumsCtrl', function ($scope, $log, PlayerFactory, albums) {

  $scope.showMe = true;

    $scope.albums = albums;


});
