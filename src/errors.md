# Errors

The ola.cv API uses conventional HTTP response statuses and codes to indicate the failure of API calls.

## Common Errors

|     |  |
| -------- | ------- |
| **401**<br>*Unauthenticated* | The request was not authorized. This can be triggered by passing an invalid API token in the authorization header or the lack of one.    |
| **403**<br>*Forbidden*    | The request was not allowed. You may receive a `403` error if you passed an API token with inappropriate permission or privilege.    |
| **404**<br>*Not Found*    | Request could not be fulfilled as the request resource does not exist. Check to make sure you have not deleted the specified resource.   |
| **422**<br>*Unprocessable Entity*    | A validation or client side error occurred and the request was not fulfilled.     |
| **429**<br>*Too Many Attempts*    | You have made too many requests in a time frame, and have exceeded the rate limit. Slow down the number of requests, and wait for no less than 60 seconds before the next request.    |
| **500**<br>*Server Error*    | Request could not be fulfilled due to an error on ola.cv's end. This should not happen so please report as soon as you encounter any instance of this.    |