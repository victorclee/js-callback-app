function getData () {
  var employeesDiv = document.getElementById('employees');

  employeesDiv.innerHTML = "Loading..."


  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {


    var htmlString = "";

    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      htmlString += '<div class="employee" onclick="changeEmployee(this)">'
        htmlString += '<h2>' + employee.name + '</h2>';
        htmlString += '<p>Job Title: ' + employee.job_titles + '</p>';
        htmlString += '<p>Department: ' + employee.department + '</p>';
        htmlString += '<p>Salary: ' + employee.annual_salary + '</p>';
        htmlString += '<br>';
      htmlString += '</div>';
    }

    employeesDiv.innerHTML = htmlString;
  });
}

function changeEmployee(employeeDiv) {
  if (employeeDiv.style.color === 'lightgray') {
    employeeDiv.style.color = '';
  } else {
  employeeDiv.style.color = "lightgray";
  }
}

function showAll() {
  var employees = document.getElementsByClassName('employee');
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    employee.classList.remove('hidden');
  }
}

function showPolice() {
  var employees = document.getElementsByClassName('employee');

  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    if (employee.innerHTML.indexOf('POLICE') !== -1) {
      employee.classList.remove('hidden');
  } else {
    employee.classList.add("hidden");
  }
}
}


