function Task(task, description) {
  this.taskName = task;
  this.descriptionName = description;
  }

$(document).ready(function(){
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDescription = $("input#taskDescription").val();

    var newTask = new Task(inputtedTask, inputtedDescription);

    $("ul#task").append("<li><span class='task'>" +  newTask.taskName + "</span></li>");
    $("input#new-task").val("");
    $("input#taskDescription").val("");
    $(".task").last().click(function() {
      $("#show-task").show();
      $(".task-name").text(newTask.taskName);
      $(".task-description").text(newTask.descriptionName);
    });
    $("#remove").click(function(){
      $(".task").remove();
    });
  });
});
