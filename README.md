# Ghabyous_Maryana_BookLibrary_Capstone<br>
## It is Chandler Kids Eleectronic Book Library<br>


__You have to use your MongoDb Key__
<br>__My ROUTE on thunder client __<br>
* To get or display all books<br>
 Get:http://localhost:3000/book<br>
* To get or display one book<br>
Get: http://localhost:3000/book/bookid
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