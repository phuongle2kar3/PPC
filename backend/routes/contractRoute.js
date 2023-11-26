const express = require("express");
const connection = require("../database/init.database");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const request = await connection();
    request.query("SELECT * FROM Full_Contract", (err, result) => {
      res.status(200).json({ success: true, data: result });
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.post("/", async (req, res) => {
  const {
    address,
    contract_price,
    contract_created_at,
    contract_deposit,
    contract_remaining,
    contract_status,
    date_of_birth,
    id_card,
    name,
    phone,
  } = req.body;

  try {
    const request = await connection();
    const result = await request.query(
      `
    INSERT INTO [dbo].[Full_Contract]
   ([Customer_Name], [Year_Of_Birth], [SSN], [Customer_Address], [Mobile], [Property_ID], [Date_Of_Contract], [Price], [Deposit], [Remain], [Status])
   VALUES ('${name}', ${date_of_birth}, '${id_card}', '${address}', '${phone}', '1', '${contract_created_at}', ${contract_price}, ${contract_deposit}, ${contract_remaining}, ${
     contract_status === "1" ? 1 : 0
   })
   `,
    );
    if (result) {
      res.status(200).json({ success: true, data: result });
    }
  } catch (err) {
    res.status(500).json({ success: false });
    console.log(err);
  }
});

module.exports = router;
