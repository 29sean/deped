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
      `SELECT name, age, gender, customer_type, sub_division_name, feedback.*
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
        item.customer_type === 1
          ? "Business"
          : item.customer_type === 2
          ? "Citizen"
          : item.customer_type === 3
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
    serviceId,
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

  if (!age || !gender || !type || !divisionId || !service || !created_at) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const [customerResult] = await pool.execute(
      `INSERT INTO customer (age, gender, customer_type) 
       VALUES (?, ?, ?)`,
      [age, gender, type]
    );
    const customerId = customerResult.insertId;

    if (!customerId) {
      return res.status(400).json({ message: "Failed to create customer." });
    }

    const [feedbackResult] = await pool.execute(
      `INSERT INTO feedback (
        fk_customer, fk_division, fk_subdivision, fk_service, service, 
        charter_one, charter_two, charter_three, 
        sqd1, sqd2, sqd3, sqd4, sqd5, sqd6, sqd7, sqd8, 
        remarks, created_at
      ) 
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        customerId,
        divisionId,
        subDivisionId,
        serviceId,
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

export const getServicesAndSubdivisions = async (req, res) => {
  const division_id = req.params.division_id;

  if (!division_id) {
    return res.status(400).json({ message: "division_id is required" });
  }

  try {
    const query = `
     SELECT 
    d.division_id,
    sd.sub_division_id,
    d.division_name,
    sd.sub_division_name,
    s.service_id,
    s.service_name
      FROM 
          division d
      LEFT JOIN 
          sub_division sd ON d.division_id = sd.parent_id
      LEFT JOIN 
          services s ON sd.sub_division_id = s.fk_sub_division_id OR d.division_id = s.fk_division_id
      WHERE 
          d.division_id = ?
      GROUP BY 
          d.division_id, sd.sub_division_id, 
          d.division_name, 
          sd.sub_division_name, s.service_id, s.service_name;
    `;

    const [results] = await pool.execute(query, [division_id]);

    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No data found for the given division_id" });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching services and subdivisions:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getFeedBackData = async (req, res) => {
  const { fk_division, fk_subdivision, fk_service } = req.query;

  if (!fk_division || !fk_service) {
    return res.status(400).json({
      message: "fk_division, customer_type, and fk_service are required",
    });
  }

  console.log(fk_division, fk_subdivision, fk_service);

  try {
    const query = `
      SELECT 
          cf.age_bracket,
          c.customer_type, 
          s.service_name AS service_availed,
          COUNT(*) AS total_respondents,
          SUM(CASE WHEN c.gender = 'male' THEN 1 ELSE 0 END) AS total_males,
          SUM(CASE WHEN c.gender = 'female' THEN 1 ELSE 0 END) AS total_females,
          AVG(f.sqd1) AS avg_sqd1,
          AVG(f.sqd2) AS avg_sqd2,
          AVG(f.sqd3) AS avg_sqd3,
          AVG(f.sqd4) AS avg_sqd4,
          AVG(f.sqd5) AS avg_sqd5,
          AVG(f.sqd6) AS avg_sqd6,
          AVG(f.sqd7) AS avg_sqd7,
          AVG(f.sqd8) AS avg_sqd8
      FROM (
          SELECT 
              c.customer_id,
              c.gender, 
              c.age, 
              c.customer_type,
              f.fk_service,
              CASE 
                  WHEN c.age BETWEEN 19 AND 25 THEN '19-25'
                  WHEN c.age BETWEEN 26 AND 35 THEN '26-35'
                  WHEN c.age BETWEEN 36 AND 45 THEN '36-45'
                  ELSE '46+' 
              END AS age_bracket
          FROM feedback f
          INNER JOIN customer c ON c.customer_id = f.fk_customer
          WHERE f.fk_division = ?
            AND (f.fk_subdivision = ? OR f.fk_subdivision IS NULL)
            AND (f.fk_service = ? OR f.fk_service IS NULL)
      ) AS cf
      INNER JOIN customer c ON cf.customer_id = c.customer_id
      LEFT JOIN services s ON cf.fk_service = s.service_id
      LEFT JOIN feedback f ON cf.customer_id = f.fk_customer
      GROUP BY cf.age_bracket, c.customer_type, s.service_name
      ORDER BY cf.age_bracket, c.customer_type, s.service_name;
    `;

    const [results] = await pool.query(query, [
      fk_division,
      fk_subdivision || null,
      fk_service,
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching feedback data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
