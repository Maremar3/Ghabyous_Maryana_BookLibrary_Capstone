# Ghabyous_Maryana_BookLibrary_Capstone<br>
## It is Chandler Kids Eleectronic Book Library DataBase,server side backend<br>
__This is my Backend DataBase__<br>
*I used MongoDB*<br>
__Technologies used in this project__<br>
*JavaScript and MongoDB*<br> 
__You have to use your MongoDb Key__<br>
__Install Thunder client extention to test your Route__<br>
__Installation__<br>
1-open a New folder<br>
2-Touch server.js<br>
3-npm init -y to create JSON<br>
4-npm i express to install express<br>
5-npm I nodemon so any changes you do in file it will restart the server automatic,you don't need to write npm start after every changing. To run your server you have to do nodemon server.js 
server or server.js it the name of your file also you have to change it in depenence file.
6-Touch .env<br>
7-Touch .gitignore<br>
8-npm i mongoDB<br>
__Run your server__<br>
1- npm start or<br>
2- nodemon server.js <br>
__I have CRUD , Create, Read , Update, Delete document__<br>
*I have one collection Book, it has four route*<br>
<br>__My ROUTE on thunder client__<br>
* To get or display all books<br>
 Get:http://localhost:3000/book<br>
* To get or display one book<br>
Get: http://localhost:3000/book/bookid<bt>
* To Post or send new collection<br>
write your colection on thunder client body , JSON , like this example as an object<br>
{<br>
   "name": "Adventure",<br>
  "auther": "Mark Sam",<br>
  "description": "aventure in the zoo",<br>
  "price": "450",<br>
  "image": "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"<br>
}<br>
POST:http://localhost:3000/book<br>
* To Delete one document<br>
Delete:http://localhost:3000/book/bookid
* To Update one document<br>
Get:http://localhost:3000/book/bookid<br>
make your update after you doing get request , then send update request<br>
Update http://localhost:3000/book/bookid<br>

__Improvement in future__<br>
*I will add user collection , make login and signup for users to register user*<br>
__FIles and folders in this projects__<br>
* conn.mjs to connect to Dataabse<br>
* Book.mjs in routes folder , it has CRUD four routes.<br>
* Server.mjs has conncetion to my collection book ,db.collection('book'),and middleware to listen to that connection<br>