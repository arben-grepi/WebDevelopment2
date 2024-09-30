# Tehtava3 Node.js Application

This application stores individual data in a MariaDB database called `tehtava3`.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MariaDB installed and running

### Step 1: Copy the Project from GitHub

1. **Open your terminal**.

2. **Clone the repository and install dependencies** using the following command:

   ```bash
   git clone https://github.com/arben-grepi/WebDevelopment2.git
   cd WebDevelopment2/tehtava3
   npm install

   ```

3. **Run the kayttaja.sql file to create the user and grant permissions:** Use root or another user.

   ```bash
   mysql -u root -p < luonti.sql

   ```

4. **Run the luonti.sql file to create the database and tables:**

   ```bash
   mysql -u root -p < kayttaja.sql

   ```


5. **Start both the backend server and the client with** 

   ```bash
   npm run dev

   ```

