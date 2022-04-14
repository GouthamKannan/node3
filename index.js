const express = require("express");
const cors = require('cors');
require("dotenv").config({
    path: ".env"
});
const StudentController = require("./controller/studentController");
const MentorController = require("./controller/mentorController");


// Initialize the express server
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("success");
  });

app.post("/create_mentor", async (req, res) => {
    const {
        mentor_name
    } = req.body;
    try {
        await MentorController.create_mentor(mentor_name)

        return res.status(200).json({
            success: true,
            data: "mentor created successfully",
        });

    } catch (error) {
        // Error
        return res.status(500).json({
            success: false,
            data: `Error in creating mentor :: ${error.message}`,
        });
    }
});

app.post("/create_student", async (req, res) => {
    const {
        student_name
    } = req.body;
    try {
        await StudentController.create_student(student_name)

        return res.status(200).json({
            success: true,
            data: "student_name created successfully",
        });

    } catch (error) {
        // Error
        return res.status(500).json({
            success: false,
            data: `Error in creating student_name :: ${error.message}`,
        });
    }
});

app.get("/get_unassigned_students", async (req, res) => {
    try {
        let studentList = await StudentController.get_students();

        return res.status(200).json({
            success: true,
            data: studentList,
        });

    } catch (error) {
        // Error
        return res.status(500).json({
            success: false,
            data: `Error in fetching student details :: ${error.message}`,
        });
    }
})

app.post("/add_student_to_mentor", async (req, res) => {
    const {
        mentor_name,
        student_names
    } = req.body;
    try {
        await StudentController.assign_mentor(mentor_name, student_names)

        return res.status(200).json({
            success: true,
            data: "mentor assigned successfully",
        });

    } catch (error) {
        // Error
        return res.status(500).json({
            success: false,
            data: `Error in assigning mentor :: ${error.message}`,
        });
    }
})

app.post("/update_mentor", async (req, res) => {
    const {
        mentor_name,
        student_name
    } = req.body;
    try {
        await StudentController.update_mentor(mentor_name, student_name)

        return res.status(200).json({
            success: true,
            data: "mentor updated successfully",
        });

    } catch (error) {
        // Error
        return res.status(500).json({
            success: false,
            data: `Error in updating mentor :: ${error.message}`,
        });
    }
})

app.post("/get_students_list", async (req, res) => {
    const {
        mentor_name
    } = req.body;
    try {
        let studentList = await StudentController.get_students(mentor_name)

        return res.status(200).json({
            success: true,
            data: studentList,
        });

    } catch (error) {
        // Error
        return res.status(500).json({
            success: false,
            data: `Error in fetching students :: ${error.message}`,
        });
    }
});


// Set the port to listen
app.listen(process.env.PORT, () => {
    console.log(`server running at port ${process.env.PORT}`);
});