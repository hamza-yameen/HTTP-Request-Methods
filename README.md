**Note:** This repository provides a clear and concise explanation of HTTP request methods' roles and functionalities within the HTTP protocol. Focus on the content, not the code.

# HTTP Request Methods
The HTTP request methods, also known as HTTP verbs, describe the actions a client (typically a web browser) intends to perform on a server resource. The client establishes a 
clear communication channel with the server by specifying the desired method in an HTTP request. The following are the most common HTTP request methods:

1. ### HTTP GET 
The GET method is used to read or retrieve resources from the server. If your GET request is successful, you will receive a response containing the information you requested. HTTP GET requests are used to access web pages,data, and files.
```bash
curl --location 'http://localhost:3000/data'
```
 
2. ### HTTP PUT 
The PUT method modifies a resource. In the body payload of a PUT request, data is passed that updates the entire resource. If no resource matches the request, it will create a new one.
```bash
curl --location --request PUT 'http://localhost:3000/data/036c86a6-af40-49f0-8d66-9df802d76e2a' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Example Item updated",
  "description": "This is an example item"
}'
```
 
3. ### HTTP POST 
In order to create a new resource, we use the POST method. When you make a POST request, it is necessary to include a body in which you specify the data that will be used to create the entity.
```bash
curl --location 'http://localhost:3000/data' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Example Item updated",
  "description": "This is an example item"
}'
```
 
4. ### HTTP DELETE 
In order to delete a resource, we use the DELETE method.
```bash
curl --location --request DELETE 'http://localhost:3000/data/4627ba56-b4f1-4b1e-8446-65eba318dbc8'
```
 
5. ### HTTP PATCH 
In order to modify a part of a resource, we use the PATCH method. The PATCH operation only requires you to pass the data that you would like to update into the request.
```bash
curl --location --request PATCH 'http://localhost:3000/data/b0598e29-29e0-428f-8a51-707acf60d516' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Example Item updatedsdfsdfdsfsd"
}'
```

6. ### HTTP OPTIONS 
The HTTP OPTIONS method is used to determine the communication options supported by a resource. It allows you to ask a server, What can I do with this resource?
```bash
curl --location --request OPTIONS 'http://localhost:3000/options'
```

7. ### HTTP HEAD 
As the HEAD method asks for the same response as a GET request, but without the response body, it receives the same result as the GET method.

8. ### HTTP CONNECT 
In order to connect to another server on the network, HTTP CONNECT establishes a tunnel through an intermediary server (usually a proxy server). By creating a virtual connection between the client and target server, the client can send and receive data as if it were directly connected.
 
9. ### HTTP TRACE 
In this case, the path to the target resource is tested by looping back the message. 

**NOTE:** Let me know if you have any questions and confusion about the method. I'm here to assist and guide you. Feel free to contact me with any questions, and I'll do my
best to answer them.

[Hamza yameen](https://www.linkedin.com/in/hamza-yameen/)
