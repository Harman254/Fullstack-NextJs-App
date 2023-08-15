import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import connectToDB from "@/utils/database";






const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",

      async authorize(credentials) {
        await connectToDB();
          try {
            const user = await User.findOne({email: credentials.email})
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
  
              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("Wrong Credentials!");
              }
            } else {
              throw new Error("User not found!");
            }             
          } catch (error) {
            throw new Error (error)
            
          }

      }
    }),
    
  ], 
  pages: {
    error: "/dashboard/login",
  }
  
  
  
})





// GithubProvider({
//   clientId: process.env.GITHUB_ID,
//   clientSecret: process.env.GITHUB_SECRET,
// }),
export {handler as GET, handler as POST}