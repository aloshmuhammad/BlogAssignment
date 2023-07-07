# Blog App

This is a simple blog app built with Node.js that allows users to create, read, update, and delete blog posts.
# Features
Queries for Create ,Read,Update and Delete Blogs

# Installation

1. Clone the repository:

   git clone https://github.com/aloshmuhammad/BlogAssignment.git

2. Navigate to Root Of the Project 
     use npm i for installing dependencies.
     use npm start for starting the project.

# Technologies Used
   1. Node.js
   2. Express.js
   3. MongoDb


 # Api Documentation

   1. Create Blog  
   2. Read Blog
   3. Update Blog
   4. Delete Blog

   Methods     Urls                     Response
   POST         api/add-posts          Status 201 Created   
   GET          api/posts/:id          Status 200 OK
   DELETE       api/delete-post/:id    "message": "Blog deleted successfully"
   PUT          api/edit-post/:id      {
                                        "_id": "64a82e469d2550c6d5e0730b",
                                            "blogName": "BINOY",
                                         "content": "Hello Node Developer",
                                           "category": "TECH",
                                          "date": "2023-07-07T15:24:54.066Z",
                                                "__v": 0
                                                }
                                        
                                                      
        
