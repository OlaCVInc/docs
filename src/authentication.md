# Authentication

Authenticate your API calls by including a valid developer account's API key or token as `Bearer` token in the `Authorization` header of every request you make. You can manage API tokens from your [account dashboard](https://developer.ola.cv).

Authorization headers should be in the following format:
`Authorization: Bearer API_TOKEN`

::: info Sample Authorization Header
Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4
:::

API requests without authentication will fail with the status: `401: Unauthorized`. All API requests should be made over HTTPS.

## Sample Request

```shell
curl https://developer.ola.cv/api/v1 \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

## Managing API Tokens

You can retrieve or create new API tokens from your [account dashboard](https://developer.ola.cv). Do ensure you name your API tokens appropriately so you can easily recognize them later.

A newly created token will be shown to you only once for your own security, so make sure to store it in a safe place.

::: danger Secure your API tokens
Do not commit your tokens to git or your VCS. Delete and recreate tokens you think may have been compromised.
:::