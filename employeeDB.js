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
  //insert function below here//
  createDepartment();
  createEmployee();
  createRole();
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
      // Call updateProduct AFTER the INSERT completes
      updateDepartment();
    }
  );

  // logs the actual query being run
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
      // Call deleteProduct AFTER the UPDATE completes
      deleteDepartment();
    }
  );

  // logs the actual query being run
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
      // Call readProducts AFTER the DELETE completes
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
      // Call updateProduct AFTER the INSERT completes
      updateRole();
    }
  );

  // logs the actual query being run
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
      // Call deleteProduct AFTER the UPDATE completes
      deleteRole();
    }
  );

  // logs the actual query being run
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
      // Call readProducts AFTER the DELETE completes
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
      // Call updateProduct AFTER the INSERT completes
      updateEmployee();
    }
  );

  // logs the actual query being run
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
      // Call deleteProduct AFTER the UPDATE completes
      deleteEmployee();
    }
  );

  // logs the actual query being run
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
      // Call readProducts AFTER the DELETE completes
    }
  );
}