# Testing

To help with your integrations, your developer account and team is eligible to register up to 3 `test domains` and have your registration fees for the domains refunded, provided your team adheres to the following conditions;

1. Test domain names must contain the word `testdomain` (e.g. `testdomainjohndoe.cv`).
2. Test domains must be registered and used for 30 days or less, after which they must be deleted.
3. Test domains are strictly for non-commercial use only.
4. Test domains must not interfere with live services or mimic active brands.

## Registering Test Domains

Test domains are registered like every other regular domains. Please see the [domains](/api/domains), [DNS zones](/api/zones) and [DNS records](/api/dns-records) pages for more details.

## Deleting Test Domains

::: tip Before you make this request!
Test domains registered over 30 days ago may be deleted, but your registration fees would not be refunded. 
:::

Delete a test domain on your account.

::: info DELETE /api/v1/domains/:id/test
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **id**<br>*string* | Set value to the ID of the domain to be deleted.    |


### Sample [Delete] Request

```shell
curl https://developer.ola.cv/api/v1/domains/01j85j9297t9xcp3snpeqz4cv7/test \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X DELETE 
```

### Sample [Delete] Response

```json
{
  "data": {
    "id": "01j85j9297t9xcp3snpeqz4cv7"
  },
  "message": "Test domain deleted successfully."
}
```

Please see the [errors page](/errors) for likely errors.

