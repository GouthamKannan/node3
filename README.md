## API ENDPOINTS

### 1. Create a new mentor

POST : https://students-mentors-node3.herokuapp.com/create_mentor \
BODY : \
{ \
&emsp;mentor_name : string \
} 

### 2. Create a new student

POST : https://students-mentors-node3.herokuapp.com/create_student \
BODY :  \
{ \
&emsp;student_name : string \
}

### 3. Assign a student to Mentor

a. GET : https://students-mentors-node3.herokuapp.com/get_unassigned_students \

b. POST : https://students-mentors-node3.herokuapp.com/add_student_to_mentor \
&emsp;BODY : \
&emsp;{ \
&emsp;&emsp;mentor_name : string, \
&emsp;&emsp;student_names : array \
&emsp;}

### 4. Assign or Change Mentor for particular Student

POST : https://students-mentors-node3.herokuapp.com/update_mentor \
BODY : \
{ \
&emsp;mentor_name : string, \
&emsp;student_name : string \
}

### 5. Show all students for a particular mentor

POST : https://students-mentors-node3.herokuapp.com/get_students_list \
BODY : \
{ \
&emsp;mentor_name : string \
}


