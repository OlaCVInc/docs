# Domains

The domains API endpoints allow you to provision and manage `Internet domain names` for your account.

## Request Headers

|     |  |
| -------- | ------- |
| **authorization**<br>*string* | Set value to `Bearer API_TOKEN`.    |
| **content-type**<br>*string*    | Set value to `application/json`.    |
| **accept**<br>*string*    | Set value to `application/json`.    |

## Check Domains

Check for the availability of domain(s) for possible registration or creation a on your account.

::: info POST /api/v1/domains/check
:::

### Body Parameters

|     |  |
| -------- | ------- |
| **domains**<br>*array* | An array of `.cv` domain names to check.    |

### Sample [Check] Request

```shell
curl https://developer.ola.cv/api/v1/domains/check \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "domains": ["somedomain.cv", "anotherdomain.cv"]
}' 
```

### Sample [Check] Response

```json
{
  "data": {
    "somedomain.cv": {
      "domain": "somedomain.cv",
      "available": false
    },
    "anotherdomain.cv": {
      "domain": "anotherdomain.cv",
      "available": true,
      "premium": false,
      "registration_fee": 10,
      "currency": "USD"
    }
  },
  "message": "All domain check(s) completed successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Register Domain 

Register a domain name on your account, [preferably after checking for its availability](#check-domains).

::: info POST /api/v1/domains
:::

### Body Parameters

|     |  |
| -------- | ------- |
| **name**<br>*string* | The `.cv` domain name to register.    |
| **registrant**<br>*string* | The ID of an existing [contact](/api/contacts) as registrant for the domain.    |
| **admin**<br>*string* | [Optional] The ID of an existing [contact](/api/contacts) as administrative contact for the domain.    |
| **tech**<br>*string* | [Optional] The ID of an existing [contact](/api/contacts) as technical contact for the domain.    |
| **billing**<br>*string* | [Optional] The ID of an existing [contact](/api/contacts) as billing contact for the domain.    |
| **nameservers**<br>*array* | [Optional] An array of nameservers, or authoritative DNS servers, to attach to the domain name. Ensure each nameserver is a valid nameserver obtained from a DNS provider, or leave out the `nameservers` parameter from request altogether.    |


::: tip Before you make this request!
Your [developer account](https://developer.ola.cv/dashboard) must be active, and your account wallet funded for this request to complete successfully. You will be automatically charged the registration fee upon a successful request, so please proceed carefully. 
:::

### Sample [Register] Request

```shell
curl https://developer.ola.cv/api/v1/domains \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "name": "mydomain.cv", 
  "registrant": "01j3g1bptyg0ynstnb330v0nx8", 
  "nameservers": ["brad.ns.cloudflare.com", "coco.ns.cloudflare.com"]
}'
```

### Sample [Register] Response

```json
{
  "data": {
    "id": "01j3nap0cs9xccpyybbkhztzzq",
    "domain": "mydomain.cv",
    "auto_renew": true,
    "registered_at": "2024-07-25T16:13:13.000000Z",
    "expires_at": "2025-07-25T16:13:13.000000Z",
    "created_at": "2024-07-25T16:13:14.000000Z",
    "updated_at": "2024-07-25T16:13:14.000000Z"
  },
  "message": "Domain registered successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## List Domains

Get a collection of registered domains in your account.

::: info GET /api/v1/domains
:::

### Query Parameters

|     |  |
| -------- | ------- |
| **per_page**<br>*integer* | Specify how many records you want to retrieve per page. If not specified we use a default value of 20.    |
| **page**<br>*integer*    | Specify exactly what page you want to retrieve. If not specified we use a default value of 1.    |

### Sample [List] Request

```shell
curl https://developer.ola.cv/api/v1/domains \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [List] Response

```json
{
  "data": [
    {
      "id": "01j3nap0cs9xccpyybbkhztzzq",
      "domain": "somedomain.cv",
      "auto_renew": true,
      "registered_at": "2024-07-25T16:13:13.000000Z",
      "expires_at": "2025-07-25T16:13:13.000000Z",
      "created_at": "2024-07-25T16:13:14.000000Z",
      "updated_at": "2024-07-25T16:13:14.000000Z"
    },
    {
      "id": "01j3n95gb85cwhe8k2j659x3s0",
      "domain": "anotherdomain.cv",
      "auto_renew": true,
      "registered_at": "2024-07-25T15:46:43.000000Z",
      "expires_at": "2025-07-25T15:46:43.000000Z",
      "created_at": "2024-07-25T15:46:44.000000Z",
      "updated_at": "2024-07-25T15:46:44.000000Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "first_page_url": "https://developer.ola.cv/api/v1/domains?page=1",
    "next_page_url": null,
    "path": "https://developer.ola.cv/api/v1/domains",
    "per_page": 20,
    "prev_page_url": null,
  },
  "message": "Domains retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Fetch Domain

Get details of a domain on your account.

::: info GET /api/v1/domains/:id
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **id**<br>*string* | Set value to the ID of the domain to fetch.    |

### Sample [Fetch] Request

```shell
curl https://developer.ola.cv/api/v1/domains/01j3n95gb85cwhe8k2j659x3s0 \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [Fetch] Response

```json
{
  "data": {
    "id": "01j3nap0cs9xccpyybbkhztzzq",
    "domain": "domain.cv",
    "auto_renew": true,
    "registered_at": "2024-07-25T16:13:13.000000Z",
    "expires_at": "2025-07-25T16:13:13.000000Z",
    "created_at": "2024-07-25T16:13:14.000000Z",
    "updated_at": "2024-07-25T16:13:14.000000Z"
  },
  "message": "Domain retrieved successfully."
}
```