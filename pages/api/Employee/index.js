const pool = require("../../../utils/config");
const db = require("./api");

export const config = {
  api:{
      externalResolver: true,
  },
}

export default async function (req, res) {
  const { method } = req;

  switch (method) {
    case "GET": db.getEmployees2(req, res);
      break;
    case "POST": db.createEmployee(req, res)
      break;
    case "DELETE": db.deleteAllEmployees(req, res)
      break;
  }
}

