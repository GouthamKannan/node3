const { client: mongoClient } = require("../model/mongodb");

// Connect to MongoDB database
const dbConnection = mongoClient.db("student_mentor");

// Initialize the collections for the database
const studentCollection = dbConnection.collection("students");

const create_student = async (student_name) => {
    const response = await studentCollection.insertOne({
        student_name,
        mentor_name: "",
    });
    return response;
  };

const get_students = async (mentor_name = "") => {
    const response = await studentCollection.find({
        mentor_name,
    }).project( {
        "_id": 0,
        "student_name": 1
    }).toArray();
    console.log(response)
    return response;
}

const update_mentor = async (mentor_name, student_name) => {
    await studentCollection.updateOne({
        student_name,
    },
    {
        $set: {mentor_name: mentor_name}
    });
}

const assign_mentor = async (mentor_name, student_names) => {
    await studentCollection.updateMany({
        student_name: {$in: student_names}
    },
    {
        $set: {mentor_name: mentor_name}
    })
}

module.exports = { create_student,get_students,update_mentor,assign_mentor};
