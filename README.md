**Note:** This repository provides a clear and concise explanation of HTTP request methods' roles and functionalities within the HTTP protocol. Focus on the content, not the code.

# HTTP Request Methods
The HTTP request methods, also known as HTTP verbs, describe the actions a client (typically a web browser) intends to perform on a server resource. The client establishes a 
clear communication channel with the server by specifying the desired method in an HTTP request. The following are the most common HTTP request methods:

1. ### HTTP GET 
GET is used for reading or retrieving resources from the server. A successful GET will return a response containing the information you requested.
```bash
curl --location 'http://localhost:3000/data'
```
 
2. ### HTTP PUT 
PUT is used to modify a resource. Data passed in the body payload of the PUT request updates the entire resource. It will create a new resource if no resource matches the request.
```bash
curl --location --request PUT 'http://localhost:3000/data/036c86a6-af40-49f0-8d66-9df802d76e2a' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Example Item updated",
  "description": "This is an example item"
}'
```
 
3. ### HTTP POST 
We use POST to create a new resource. A POST request requires a body in which you define the data of the entity to be created. 
```bash
curl --location 'http://localhost:3000/data' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Example Item updated",
  "description": "This is an example item"
}'
```
 
4. ### HTTP DELETE 
We use DELETE to delete a resource.
```bash
curl --location --request DELETE 'http://localhost:3000/data/4627ba56-b4f1-4b1e-8446-65eba318dbc8'
```
 
5. ### HTTP PATCH 
We use PATCH to modify a part of a resource. With PATCH, you only need to pass in the data that you want to update.
```bash
curl --location --request PATCH 'http://localhost:3000/data/b0598e29-29e0-428f-8a51-707acf60d516' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Example Item updatedsdfsdfdsfsd"
}'
```

6. ### HTTP OPTIONS 
In this section, we describe the communication options that are available for the target resource.
```bash
curl --location --request OPTIONS 'http://localhost:3000/options'
```

7. ### HTTP HEAD 
The HEAD method asks for a response identical to a GET request but without the response body. 

8. ### HTTP CONNECT 
In the CONNECT method, a tunnel is established between the user and the server identified by the target resource. 
 
9. ### HTTP TRACE 
In this case, the path to the target resource is tested by looping back the message. 

**NOTE:** Let me know if you have any questions and confusion about the method. I'm here to assist and guide you. Feel free to contact me with any questions, and I'll do my
best to answer them.

[Hamza yameen Linkedin](https://www.linkedin.com/in/hamza-yameen/)
