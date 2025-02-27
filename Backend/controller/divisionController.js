import pool from "../db.js";

export const addDivision = async (req, res) => {
  const { division_name, description } = req.body;

  try {
    const [existingDivision] = await pool.execute(
      "SELECT * FROM division WHERE LOWER(division_name) = LOWER(?)",
      [division_name]
    );
    if (existingDivision.length > 0) {
      return res.status(400).json({ message: "Division already exists" });
    }

    await pool.execute(
      "INSERT INTO division (division_name, description) VALUES (?, ?)",
      [division_name, description]
    );

    res.status(201).json({ message: "Division added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateDivision = async (req, res) => {
  const { division_name, description, division_id } = req.body;

  try {
    const [existingDivision] = await pool.execute(
      "SELECT * FROM division WHERE LOWER(division_name) = LOWER(?)",
      [division_name]
    );
    if (existingDivision.length > 0) {
      return res.status(400).json({ message: "Division already exists" });
    }

    await pool.execute(
      "UPDATE division SET division_name = ?, description = ? WHERE division_id = ?",
      [division_name, description, division_id]
    );

    res.status(201).json({ message: "Division updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getDivisions = async (req, res) => {
  try {
    const [divisions] = await pool.execute("SELECT * FROM division");
    res.json(divisions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getServices = async (req, res) => {
  const divisionId = req.query.divisionId ?? null;
  const subDivisionId = req.query.subDivisionId ?? null;

  if (!divisionId && !subDivisionId) {
    return res
      .status(400)
      .json({ message: "Either divisionId or subDivisionId is required" });
  }

  try {
    let query = "";
    let params = [];

    if (subDivisionId) {
      query =
        "SELECT service_id, service_name FROM services WHERE fk_sub_division_id = ?";
      params = [subDivisionId];
      console.log("Using subDivisionId:", subDivisionId);
    } else if (divisionId) {
      query =
        "SELECT service_id, service_name FROM services WHERE fk_division_id = ?";
      params = [divisionId];
      console.log("Using divisionId:", divisionId);
    }

    const [services] = await pool.execute(query, params);
    console.log("Query results:", services);
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getSubDivision = async (req, res) => {
  try {
    const [sub_division] = await pool.execute("SELECT * FROM sub_division");
    res.json(sub_division);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getFeedbackByDivision = async (req, res) => {
  const { division_id } = req.params;

  try {
    const [feedback] = await pool.execute(
      `SELECT name, age, gender, type, sub_division_name, feedback.*
       FROM feedback
       INNER JOIN customer ON customer_id = feedback.fk_customer
       INNER JOIN division ON division_id = feedback.fk_division
       LEFT JOIN sub_division ON sub_division_id = feedback.fk_subdivision
       WHERE fk_division = ?`,
      [division_id]
    );

    const mappedFeedback = feedback.map((item) => ({
      ...item,
      customerType:
        item.type === 1
          ? "Business"
          : item.type === 2
          ? "Citizen"
          : item.type === 3
          ? "Government"
          : "Unknown",
    }));

    res.json(mappedFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const insertFeedback = async (req, res) => {
  const {
    age,
    gender,
    type,
    divisionId,
    subDivisionId,
    service,
    chart1,
    chart2,
    chart3,
    sqd1,
    sqd2,
    sqd3,
    sqd4,
    sqd5,
    sqd6,
    sqd7,
    sqd8,
    remarks,
    created_at,
  } = req.body;

  // Input validation
  if (!age || !gender || !type || !divisionId || !service || !created_at) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    // Insert into 'customer' table and get the inserted ID
    const [customerResult] = await pool.execute(
      `INSERT INTO customer (age, gender, type) 
       VALUES (?, ?, ?)`,
      [age, gender, type]
    );
    const customerId = customerResult.insertId;

    if (!customerId) {
      return res.status(400).json({ message: "Failed to create customer." });
    }

    // Insert into 'feedback' table using the retrieved customer ID
    const [feedbackResult] = await pool.execute(
      `INSERT INTO feedback (
        fk_customer, fk_division, fk_subdivision, service, 
        charter_one, charter_two, charter_three, 
        sqd1, sqd2, sqd3, sqd4, sqd5, sqd6, sqd7, sqd8, 
        remarks, created_at
      ) 
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        customerId,
        divisionId,
        subDivisionId,
        service,
        chart1,
        chart2,
        chart3,
        sqd1,
        sqd2,
        sqd3,
        sqd4,
        sqd5,
        sqd6,
        sqd7,
        sqd8,
        remarks,
        created_at,
      ]
    );

    if (feedbackResult.affectedRows === 0) {
      return res.status(400).json({ message: "Failed to add feedback." });
    }

    res.status(201).json({ message: "Feedback added successfully" });
  } catch (error) {
    console.error("Error inserting feedback:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
