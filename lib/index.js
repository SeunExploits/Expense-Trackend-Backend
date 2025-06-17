import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

// function to hash a plain text password
export const hashPassword = async(userValue) => {
    // Generate a salt with 10 rounds
    const salt = await bcrypt.genSalt(10);

    // Hash the user-provided password with the generated salt
    const hashedPassword = await bcrypt.hash(userValue, salt);
    return hashedPassword;
};

// compare a plaintext password with a hashed password
export const comparePassword = async(userPassword, password) => {
    try {
        // compare a plain user password with the stored hashed password
        const isMatch = await bcrypt.compare(userPassword, password)

        return isMatch;
    }catch(error) {
        console.log(error)
    }

};

// function to create a JSON Web Token (JWT) for user authentication
export  const createJWT = (id) => {
    return JWT.sign (
        {

        userId: id, 
        
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};


export function getMonthName(index) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[index];
}