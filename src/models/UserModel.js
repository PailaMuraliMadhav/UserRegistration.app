import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    //username

    username: {
      string: true,
      required: true,
      unique:true,
      trim:true,
      lowercase:true,
      index:true
    },
    //    fullname
    fullname: {
      string: true,
      required: true,
      
    },
    // email
    email: {
      string: true,
      required: true,
      unique:true,
      trim:true,

    },
    // mobile
    mobile: {
      number: true,
      required: true,
      unique:true,
      minlength:10,
      maxlength:10,
      trim:true


    },
    // avtar
    avtar: {
      string: true,  //cloudnary url
      required: true,
      //default: "https://i.ibb.co/77585983/avtar.png"
    },
    // address
address: {
      string: true,
      required: true,
      trim:true,
      minlength:6,
      maxlength:100
    },
    // password
    password: {
      string: true,
      required: true,
      trim:true,
      minlength:6,
      maxlength:100
    },
    

    // coverImage
    coverimage:{
      strig:true,
      trim: true,
      default: "https://i.ibb.co/77585983/avtar.png"
      },
    // password
    password:{
string:true,
required:true,
trim:true,
minLength:8,
maxLength:20
    },
    //refreshtoken
refreshtoken:{
  type:true,
  trim:true
},
 }, {
    timestamps: true,
  }

);

export default User = mongoose.model("User",UserSchema);