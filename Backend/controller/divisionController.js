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
  try {
    const [services] = await pool.execute("SELECT * FROM services");
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getFeedbackByDivision = async (req, res) => {
  const { division_id } = req.params;

  try {
    const [feedback] = await pool.execute(
      `SELECT name, age, gender, type, feedback.*
       FROM feedback
       INNER JOIN customer ON customer_id = feedback.fk_customer
       INNER JOIN division ON division_id = feedback.fk_division
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
  const { customer_id, division_id, feedback_text } = req.body;

  try {
    await pool.execute(
      "INSERT INTO feedback (fk_customer, fk_division, feedback_text) VALUES (?, ?, ?)",
      [customer_id, division_id, feedback_text]
    );

    res.status(201).json({ message: "Feedback added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
