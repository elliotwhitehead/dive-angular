//define the todoApp module
var todoApp = angular.module('todoApp', []);

// define the controller for the list portion of the module
todoApp.controller('ListController',function(){

	var myList = this;

	//add a few pre-populated items to be done
	myList.tasks = [
		{text:'load this page', done:true, priority:3},
		{text:'add an item to the list', done:false, priority:2}];

	myList.addTask = function(){
		myList.tasks.push({text:myList.taskText, done:false, priority:myList.priority});
		myList.taskText = '';
	};

});

todoApp.filter('dashify', function(){
	return function(id){
		return id.replace(/ /g, '-');
	}
});