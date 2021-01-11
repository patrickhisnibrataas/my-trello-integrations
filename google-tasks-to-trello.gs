function main() {  
  var tasks = Task_getTasks();
  
  if (!tasks.items)
    return;
  
  for (var i = 0; i < tasks.items.length; i++) {
    var task = tasks.items[i];
    var emailLink = task.links[0].link.replace('https://mail.google.com/mail/#all', 'https://mail.google.com/mail/u/1/#all');
    
    if (Trello_createCard(task.title, '', emailLink) === 200) {
      Task_deleteTask(task.id);
    }
  }
}

function Task_getTaskList() {
  return Tasks.Tasklists.get('Your Google Tasks list ID');
}

function Task_getTasks() {
  return Tasks.Tasks.list(Task_getTaskList().id);
}

function Task_deleteTask(id) {
  Tasks.Tasks.remove(Task_getTaskList().id, id);
}

function Trello_createCard(title, description, attachmentUrl) {
  var endpoint = 'https://api.trello.com/1/cards'
  var params = {
    'key' : 'Your Trello Key Here',
    'token' : 'Your Trello Token Here',
    'name' : title,
    'desc' : description,
    'urlSource' : attachmentUrl,
    'pos' : 'bottom',
    'idList' : 'The Trello List ID to put created card in',
    'idLabels' : 'If you want to label your card add the label ID here'
  }
  
  var options = {
    'method' : 'post',
    'payload' : params
  }
  
  return UrlFetchApp.fetch(endpoint, options).getResponseCode();
}