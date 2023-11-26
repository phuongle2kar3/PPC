const express = require("express");
const connection = require("../database/init.database");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const request = await connection();
    request.query("SELECT * FROM Property", (err, result) => {
      res.status(200).json({ success: true, data: result });
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.post("/", async (req, res) => {
  const {
    property_name,
    property_type,
    property_province,
    property_address,
    property_district,
    property_area,
    property_bed_room,
    property_bath_room,
    property_price,
    property_status,
    property_description,
  } = req.body;
  try {
    const request = await connection();
    const result = await request.query(
      `
    INSERT INTO [dbo].[Property]
   ([Property_Name], [Property_Type_ID], [Description], [District_ID], [Address], [Area], [Bed_Room], [Bath_Room], [Price], [Property_Status_ID])
   VALUES ('${property_name}', ${property_type}, '${property_description}', ${property_district}, '${property_address}', ${property_area}, ${property_bed_room}, ${property_bath_room}, ${property_price}, ${property_status})
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
