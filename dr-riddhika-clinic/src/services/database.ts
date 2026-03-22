import { Pool } from 'pg'; // Assuming you're using PostgreSQL

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export const connect = async () => {
  try {
    await pool.connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export const disconnect = async () => {
  try {
    await pool.end();
    console.log('Database disconnected successfully');
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
    throw error;
  }
};

export const query = async (text: string, params?: any[]) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};