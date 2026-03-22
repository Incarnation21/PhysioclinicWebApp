# Dr. Riddhika Physio & Rehab Clinic

## Project Overview
This project is a web application for Dr. Riddhika Physio & Rehab Clinic, providing specialized physiotherapy treatments. The application is built using React and TypeScript, and it connects to a database to manage patient information and treatment records.

## Project Structure
```
dr-riddhika-clinic
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── components
│   │   └── App.tsx      # Main application component
│   ├── services
│   │   └── database.ts   # Database connection and query functions
│   ├── models
│   │   └── Patient.ts    # Patient data model
│   └── types
│       └── index.ts      # TypeScript types and interfaces
├── public
│   └── index.html        # Main HTML file for the application
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
├── README.md             # Project documentation
└── database
    ├── schema.sql       # SQL schema for the database
    └── seed.sql         # SQL commands to seed the database
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd dr-riddhika-clinic
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Create a database using the schema defined in `database/schema.sql`.
   - Seed the database with initial data using the commands in `database/seed.sql`.

4. **Run the application:**
   ```
   npm start
   ```

## Usage
- Access the application in your web browser at `http://localhost:3000`.
- The application allows users to view and manage patient information and treatment records.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.