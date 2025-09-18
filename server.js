require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Client } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Barangay System API running ✅');
});

// ✅ PostgreSQL connection (explicit fields for debugging)
const client = new Client({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'barangay_db',
  password: process.env.PGPASSWORD || '071404',
  port: process.env.PGPORT || 5432,
});

// ✅ Connect to PostgreSQL
client.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ Connection error", err.message));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
