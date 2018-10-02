(function () {

    var TasksController = function ($scope, $filter, localTasksService) {
        $scope.message = "List of Tasks";

        $scope.Tasks = [];
        $scope.Task = {};
        $scope.editTask = null;

        $scope.fetchTasks = function () {
            $scope.Tasks = localTasksService.Tasks;
        }

        $scope.addTask = function (frmAddTask) {
            if (frmAddTask.$valid) {
                localTasksService.addTask($scope.Task);
                $scope.Task = {}
                $scope.fetchTasks();
				alert("Task Added sucessfully");
            }
            else {
                alert("Invalid values. All values are required");
            }
        }

        $scope.updateTask = function (frmEditTask) {
            if (frmEditTask.$valid) {
                localTasksService.updateTask($scope.editTask);
                $scope.editTask = null;
                $scope.fetchTasks();
				alert("Task Updated sucessfully");
            }
            else {
                alert("Invalid values. All values are required");
            }
        }
		$scope.endTask = function (frmEndTask) {
            if (frmEditTask.$valid) {
                localTasksService.endTask($scope.editTask);
                $scope.editTask = null;
                $scope.fetchTasks();
				alert("Task Completed sucessfully");
            }
            else {
                alert("Invalid values. All values are required");
            }
        }

        $scope.setEditTask = function (selected) {
            $scope.editTask = angular.copy(selected);
            $scope.Task = {}
        }

        $scope.cancelEdit = function () {
            $scope.editTask = null;
            $scope.Task = {}
        }

        $scope.fetchTasks();
    }

    angular.module('TaskManagerApplication').controller('TasksController', ["$scope", "$filter", "localTasksService",  TasksController]);
}());