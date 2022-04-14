const { client: mongoClient } = require("../model/mongodb");

// Connect to MongoDB database
const dbConnection = mongoClient.db("student_mentor");

// Initialize the collections for the database
const mentorCollection = dbConnection.collection("mentors");

const create_mentor = async (mentor_name) => {
    const response = await mentorCollection.insertOne({
      mentor_name
    });
    return response;
  };

module.exports = { create_mentor};