import bcrypt from "bcryptjs";

async function run() {
  const password = "Admin@123"; // change to your password
  const hashed = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashed);
}

run();
