import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    number:{
      type:number,
      trim:true,
      maxLength:10,
      minLength:10,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "moderator"],
      default: "user",
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
      type: String,  // cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    refreshToken: {
      type: String,
    },
  }

);



//to hash password before saving to db
//pre save hook
userSchema.pre("save",async function (next){
  if(this.isModified("password")){
    return next();
  }
this.password =await bcrypt.hash(this.password,10)
next();
})
// to compare password with hashed password
userSchema.methods.isPasswordCorrect = async function(){
  return await bcrypt.compare(password,this.password);
}
// AccessToken
userSchema.methods.generateAccessToken = async function(){
  return await jwt.sign({
    _id:this.id,
    email: this.email,
    username: this.username,
    fullname:this.fullName,
number:this.number
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
  )
  console.log("Token: ",token);
  return token;
}
//REfreshToken
userSchema.methods.generaterefreshToken =  function () {
  const token = jwt.sign(
    {
      _id: this.id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
  console.log("Token: ", token);
  return token;
};



export default User = mongoose.model("User", userSchema);