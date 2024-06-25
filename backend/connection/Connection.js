const mongoose = require("mongoose")

const Connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Attendance-Management")
    console.log("connected to database successfully")

  } catch (error) {
    console.log(error)
  }
}

module.exports = Connection;