djello.factory('BoardsService', ['Restangular', function(Restangular) {


  var getBoardsForUser = function(user) {
    return Restangular.one('users', user.id).get();
  };


  var createBoard = function(boardObj) {
    return Restangular.all('boards').post(boardObj);
  };

  // var updateBoard = function(id) {
  //   return Restangular.one('boards', id).get();
  // }

  var deleteBoard = function(board){
    return Restangular.one('boards', board.id).remove();
  }


  var currentBoardId;



  return {
    getBoardsForUser: getBoardsForUser,
    createBoard: createBoard,
    deleteBoard: deleteBoard,
    currentBoardId: currentBoardId
    // updateBoard: updateBoard
  }




}]);