var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createDepartment();
  createEmployee();
  createRole();
  readDepartments();
  readEmployees();
  readRoles();
});

function createDepartment() {
  console.log("Inserting a new department...\n");
  var query = connection.query(
    "INSERT INTO department SET ?",
    {
      id: "  ",
      name: '  ',
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " department inserted!\n");
      updateDepartment();
    }
  );

  console.log(query.sql);
}

function updateDepartment() {
  console.log("Updating department...\n");
  var query = connection.query(
    "UPDATE department SET ? WHERE ?",
    [
      {
        id: '  '
      },
      {
        name: "  "
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " department updated!\n");
      deleteDepartment();
    }
  );

  console.log(query.sql);
}

function deleteDepartment() {
  console.log("Deleting department...\n");
  connection.query(
    "DELETE FROM department WHERE ?",
    {
      name: "  "
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " department deleted!\n");
    }
  );
}

function createRole() {
  console.log("Inserting a new role...\n");
  var query = connection.query(
    "INSERT INTO role SET ?",
    {
      id: "  ",
      title: '  ',
      salary: '  ',
      department_id: '  '
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " role inserted!\n");
      updateRole();
    }
  );

  console.log(query.sql);
}

function updateRole() {
  console.log("Updating role...\n");
  var query = connection.query(
    "UPDATE role SET ? WHERE ?",
    [
      {
        id: '  '
      },
      {
        title: "  "
      },
      {
        salary: '  '
      },
      {
        department_id: '  '
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " role updated!\n");
      deleteRole();
    }
  );

  console.log(query.sql);
}

function deleteRole() {
  console.log("Deleting role...\n");
  connection.query(
    "DELETE FROM role WHERE ?",
    {
      name: "  "
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " role deleted!\n");
    }
  );
}

function createEmployee() {
  console.log("Inserting a new employee...\n");
  var query = connection.query(
    "INSERT INTO employee SET ?",
    {
      id: "  ",
      first_name: '  ',
      last_name: '  ',
      role_id: '  ',
      manager_id: '  '
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      updateEmployee();
    }
  );

  console.log(query.sql);
}

function updateEmployee() {
  console.log("Updating employee...\n");
  var query = connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        id: '  '
      },
      {
        first_name: "  "
      },
      {
        last_name: '  '
      },
      {
        role_id: '  '
      },
      {
        manager_id: '  '
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee updated!\n");
      deleteEmployee();
    }
  );

  console.log(query.sql);
}

function deleteEmployee() {
  console.log("Deleting employee...\n");
  connection.query(
    "DELETE FROM employee WHERE ?",
    {
      name: "  "
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee deleted!\n");
    }
  );
}

function readDepartments(){
  console.log("Selecting all departments...\n");
  connection.query("SELECT * FROM department", function(err, res){
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function readEmployees(){
  console.log("Selecting all employees...\n");
  connection.query("SELECT * FROM employee", function(err, res){
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function readRoles(){
  console.log("Selecting all roles...\n");
  connection.query("SELECT * FROM role", function(err, res){
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View department's budget",
        "Search for all employees by manager",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View department's budget":
        budgetSearch();
        break;

      case "Search for all employees by manager":
        searchEmployeeMgr();
        break;

      case "exit":
        connection.end();
        break;
      }
    });
}
function searchEmployeeMgr(){
  inquirer
    .prompt({
      name: "Manager",
      type: "input",
      message: "Find all employees managed by?"
    })
    .then(function(answer) {
      console.log(answer.manager_id);
      connection.query("SELECT * FROM employee WHERE ?", { manager_id: answer.manager_id }, function(err, res) {
        if (err) throw err;
        console.log(
          "First Name: " +
            res[0].first_name +
            " || Last Name: " +
            res[0].last_name +
            " || ID Number: " +
            res[0].id +
            " || Role ID: " +
            res[0].role_id
        );
        runSearch();
      });
    });
}

function budgetSearch(){
  
}