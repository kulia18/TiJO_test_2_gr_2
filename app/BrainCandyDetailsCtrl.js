(function () {
    "use strict";
    function BrainCandyDetailsCtrl(CandyDAO, $routeParams) {
        var ctrl = this;
        CandyDAO.get($routeParams.id).then(function (data) {
              if(data !==0 ){
                  ctrl.details = data;
              }
        });

        ctrl.saveCandy = function () {
            CandyDAO.save(ctrl.details);
        };
        ctrl.deleteCandy = function () {
            CandyDAO.delete($routeParams.id);
        };
    }

    var module = angular.module("exerciseApp");
    module.controller("BrainCandyDetailsCtrl", ["CandyDAO", "$routeParams", BrainCandyDetailsCtrl]);
})();
