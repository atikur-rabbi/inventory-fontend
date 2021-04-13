const pool = require("../../../utils/config");
const db = require("../../../utils/test");

// export default db.handler

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":

      try {
        pool.query("SELECT * FROM Employee ORDER BY id ASC", (error, results) => {
          if (error) {
            throw error;
          }
          res.json(results.rows);
        });
      } catch (error) {
        res.status(400).json({ success: false, });
      }

      break;
    case "POST":
      res.status(200).json({ POST: method });
      break;
  }
}

// export default async (req, res) => {
// 	const { method } = req;

// 	switch (method) {
// 		case "GET":
// 			pool.query("SELECT * FROM Employee ORDER BY id ASC", (error, results) => {
//         if (error) {
//           throw error;
//         }
//         res.status(200).json(results.rows);
//       });

// 		case "POST":
// 			try {
// 				const employees = await Employee.create(req.body);
// 				return res.status(201).json({
// 					success: true,
// 					data: employees,
// 				});
// 			} catch (error) {
// 				return res.status(400).json({
// 					success: false,
// 				});
// 			}
// 		default:
// 			res.setHeaders("Allow", ["GET", "POST"]);
// 			return res
// 				.status(405)
// 				.json({ success: false })
// 				.end(`Method ${method} Not Allowed`);
// 	}
// };
