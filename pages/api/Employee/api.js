const pool = require("../../../utils/config");

async function getEmployees2(req, res) {
  pool.query("SELECT * FROM Employee ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
      res.json([]);
    }
    res.json(results.rows);
  });
}

async function getEmployees(req, res) {
  pool.query("SELECT * FROM Employee ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
}

async function createEmployee (req, res) {
  const { first_name , last_name , is_active , date_of_birth } = req.body

  pool.query('INSERT INTO Employee (first_name ,last_name , is_active , date_of_birth ) VALUES ($1,$2,$3,$4)', [first_name , last_name , is_active , date_of_birth], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Employee added with ID: ${res.insertId}`)
  })
}

async function deleteAllEmployees (req, res) {
  pool.query('DELETE FROM Employee', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Table cleared`)
  })
}


function getEmployeeById (req, res) {
  const {id} = req.query

  pool.query('SELECT * FROM Employee WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

function updateEmployee (req, res) {
  const {id} = req.query
  const { first_name , last_name , is_active , date_of_birth } = req.body

  pool.query(
    'UPDATE Employee SET first_name = $1, last_name = $2, is_active =$3, date_of_birth = $4 WHERE id = $5',
    [first_name , last_name , is_active , date_of_birth, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Employee modified with ID: ${id}`)
    }
  )
}

function deleteEmployee (req, res) {
  const {id} = req.query

  pool.query('DELETE FROM Employee WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Employee deleted with ID: ${id}`)
  })
}

module.exports = {
  getEmployees,
  createEmployee,
  deleteAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getEmployees2,
};
