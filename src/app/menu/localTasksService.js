(function () {

    var localTasksService = function () {

        // Just a temporary varibale to mimic auto increment on client side
        var nextIdForTask = 6;

 var _Tasks = [
              { TaskID: 1, TaskName: "TaskName-1", ParentTask: "", Priority: "100", StartDate: "08/15/2018", EndDate: "10/15/2018" }, 
			   { TaskID: 2, TaskName: "TaskName-2", ParentTask: "", Priority: "80", StartDate: "08/17/2018", EndDate: "10/28/2018"  },
                { TaskID: 3, TaskName: "TaskName-3", ParentTask: "", Priority: "60", StartDate: "09/03/2018", EndDate: "11/15/2018"  },
                { TaskID: 4, TaskName: "TaskName-4", ParentTask: "TaskName-2", Priority: "50", StartDate: "10/15/2018", EndDate: "12/15/2018"  },
                { TaskID: 5, TaskName: "TaskName-5", ParentTask: "TaskName-3", Priority: "40", StartDate: "10/15/2018", EndDate: "11/15/2018"  }
        ];
        var _addTask = function (Task) {
            Task.ID = nextIdForTask;
            nextIdForTask += 1;
            _Tasks.push(Task);
        }

        var _updateTask = function (Task) {
           // A lame way of updating the Task in the list
            for (var i = 0; i < _Tasks.length; ++i) {
                if (_Tasks[i].ID == Task.ID) {
                    _Tasks[i] = Task;
                }
            }
        }
		var _endTask = function (Task) {
           // A lame way of updating the Task in the list
            for (var i = 0; i < _Tasks.length; ++i) {
                if (_Tasks[i].ID == Task.ID) {
                    _Tasks[i] = Task;
                }
            }
        }

        return {
            Tasks: _Tasks,
            addTask: _addTask,
            updateTask: _updateTask,
			 endTask: _endTask
        };
    }
 angular.module('TaskManagerApplication').factory('localTasksService', [localTasksService]);
}());