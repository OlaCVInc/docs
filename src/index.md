# Introduction

Learn how to integrate our APIs into your applications.

## API Basics

::: info Before you begin!
You should [create a free ola.cv developer account](https://ola.cv/app/login), or make sure you belong to a developer account as a team member. Grab or create a new API key for your account so you can make API calls. 
:::

The ola.cv API is mostly RESTful and organized by the resources your account own and have access to, with very few exceptions.

### HTTP Methods

All usual HTTP verbs such as `POST`, `GET`, `PUT` and `DELETE` are supported by our API endpoints, and the allowed method for each endpoint would be indicated on the appropriate sections.  

### Sample Requests

Sample API calls are provided next to each method [using cURL](http://curl.haxx.se/), so you can just insert your specific parameters, and you can get up and running from your command line or terminal.

You can also use HTTP clients such as [Postman](https://www.postman.com/downloads/), if you are not so familiar or comfortable with cURL or the terminal.

### Requests and Response

Both request body data and response data are formatted as JSON. Responses will always be returned with the content type `application/json`, and will genrally be in the following format:

```json
{
  "message": "[string]",
  "data": "[object]"
}
```

#### Keys

|     |  |
| -------- | ------- |
| **message**<br>*string* | This is a summary of the response and its status e.g. when trying to retrieve a list of your `contacts`, message might say "Contacts retrieved successfully." In the event of an error, the message key will contain a description of the error.    |
| **data**<br>*object*    | This contains the results of your request. It can either be an object, or an array depending on the request made, e.g. a request to retrieve a single `contact` will return a object in the data key, while the key would be an array of `contacts` if a collection is requested.    |
| **errors**<br>*object*    | This contains the errors of bad and unprocessable requests, such as when your request inputs cannot be validated, or you are not authorized to make such requests. It is object with keys for each error encountered.     |

#### Meta Object

The meta key is used to provide additional context for the contents of the data key. For instance, if a list of `domains` is being retrieved, pagination parameters can be passed along to limit the result set. The meta key will then contain an object with the following attributes:

```json
{
  "current_page": 1,
  "first_page_url": "https://devloper.ola.cv/api/v1/domains?page=1",
  "from": 1,
  "next_page_url": null,
  "path": "https://developer.ola.cv/api/v1/domains",
  "per_page": 15,
  "prev_page_url": null,
  "to": 3
}
```

#### Keys

|     |  |
| -------- | ------- |
| **current_page**<br>*number* | This is the current page being accessed by your request.    |
| **first_page_url**<br>*string*    | This is the URL at which the first page of records can be obtained.    |
| **next_page_url**<br>*string*/*null*    | This is the URL at which the next page of records can be obtained when available.     |
| **prev_page_url**<br>*string*/*null*    | This is the URL at which the previous page of records can be obtained when available.     |
| **per_page**<br>*number* | This is the number of records per page being accessed by your request.    |