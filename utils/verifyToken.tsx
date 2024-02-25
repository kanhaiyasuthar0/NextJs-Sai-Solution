import { JsonWebTokenError } from "jsonwebtoken";
import { cookies } from "next/headers";

export function validateToken() {
  try {
    // Replace "MYKEY" with your actual secret key
    // used for signing the JWT tokens
    let token = cookies().get("token");
    console.log("🚀 ~ validateToken ~ token:", token);
    const decoded = JsonWebTokenError.verify(token, "MYKEY");
    console.log("Decoded JWT:", decoded);
    // Token is valid
    // Proceed with your logic here, e.g., fetching user data
    // based on the decoded information
    return { valid: true, decoded };
  } catch (error) {
    console.error("Invalid Token:", error.message);
    // Token validation failed
    return { valid: false, error: error.message };
  }
}
