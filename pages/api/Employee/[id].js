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
    case "GET": db.getEmployeeById(req, res);
    break;
    case "PUT": db.updateEmployee(req, res);
    break;
    case "DELETE": db.deleteEmployee(req, res);
    break;
  }
}

