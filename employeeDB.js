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
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateDepartment() {
  console.log("Updating all Rocky Road quantities...\n");
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
      deleteProduct();
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