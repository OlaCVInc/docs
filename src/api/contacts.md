# Contacts

The contacts API endpoints allow you to provision and manage individual or organizational registrants and contacts for [domains](/api/domains).

## Request Headers

|     |  |
| -------- | ------- |
| **authorization**<br>*string* | Set value to `Bearer API_TOKEN`.    |
| **content-type**<br>*string*    | Set value to `application/json`.    |
| **accept**<br>*string*    | Set value to `application/json`.    |

## Create Contact

Create a new contact on your account.

::: info POST /api/v1/contacts
:::

### Body Parameters

|     |  |
| -------- | ------- |
| **name**<br>*string* | Contact's full name.    |
| **email**<br>*string*    | Contact's email address.    |
| **phone**<br>*string*    | Contact's phone number.    |
| **fax**<br>*string*    | [Optional] Contact's fax number.  |
| **organization**<br>*string*    | [Optional] Contact's organization or company name.    |
| **address**<br>*string*    | Contact's physical or street address.    |
| **city**<br>*string*    | Contact's city.    |
| **state**<br>*string*    | [Optional] Contact's state or province.    |
| **postcode**<br>*string*    | Contact's postcode / zip code / postal code.    |
| **country**<br>*string*    | Contact's country specified in the 2-letter ISO 3166 format e.g `US` for United States of America .    |

### Sample [Create] Request

```shell
curl https://developer.ola.cv/api/v1/contacts \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X POST \
-d '{"name": "John Doe", "email": "jdoe@example.com", "phone": "+1 818 3000006", "organization": "Acme, Inc.", "address": "124, Bourdillon Boulevard", "city": "Round Rock", "postcode": "78000", "country": "US"}'
```

### Sample [Create] Response

```json
{
  "data": {
    "id": "01j3j7h3c3mxr05g1jgmb3st2a",
    "name": "John Doe",
    "email": "jdoe@example.com",
    "phone": "+1 818 3000006",
    "fax": null,
    "organization": "Acme, Inc.",
    "address": "124, Bourdillon Boulevard",
    "city": "Round Rock",
    "state": null,
    "postcode": "78000",
    "country": "US",
    "password": null,
    "created_at": "2024-07-24T11:20:24+00:00",
    "updated_at": "2024-07-24T11:20:24+00:00"
  },
  "message": "Contact created successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Fetch Contact

Get details of a contact on your account.

::: info GET /api/v1/contacts/:id
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **id**<br>*string* | Set value to the ID of the contact to fetch.    |

### Sample [Fetch] Request

```shell
curl https://developer.ola.cv/api/v1/contacts/01j3j7h3c3mxr05g1jgmb3st2a \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [Fetch] Response

```json
{
  "data": {
    "id": "01j3j7h3c3mxr05g1jgmb3st2a",
    "name": "John Doe",
    "email": "jdoe@example.com",
    "phone": "+1 818 3000006",
    "fax": null,
    "organization": "Acme, Inc.",
    "address": "124, Bourdillon Boulevard",
    "city": "Round Rock",
    "state": null,
    "postcode": "78000",
    "country": "US",
    "password": null,
    "created_at": "2024-07-24T11:20:24+00:00",
    "updated_at": "2024-07-24T11:20:24+00:00"
  },
  "message": "Contact retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## List Contacts

Get a collection of the contacts on your account.

::: info GET /api/v1/contacts
:::

### Query Parameters

|     |  |
| -------- | ------- |
| **per_page**<br>*integer* | Specify how many records you want to retrieve per page. If not specified we use a default value of 20.    |
| **page**<br>*integer*    | Specify exactly what page you want to retrieve. If not specified we use a default value of 1.    |

### Sample [List] Request

```shell
curl https://developer.ola.cv/api/v1/contacts \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [List] Response

```json
{
	"data": [
		{
			"id": "01j3j7h3c3mxr05g1jgmb3st2a",
			"name": "John Doe",
			"email": "jdoe@example.com",
			"phone": "+1 818 3000006",
			"fax": null,
			"organization": "Acme, Inc.",
			"address": "124, Bourdillon Boulevard",
			"city": "Round Rock",
			"state": null,
			"postcode": "78000",
			"country": "US",
			"password": null,
			"created_at": "2024-07-24T11:20:24+00:00",
			"updated_at": "2024-07-24T11:20:24+00:00"
		},
		{
			"id": "01j3n95gb85cwhe8k2j659x3s0",
			"name": "Jane Doe",
			"email": "jdoe@example.com",
			"phone": "+1 818 3000009",
			"fax": null,
			"organization": "Acme, Inc.",
			"address": "124, Bourdillon Boulevard",
			"city": "Round Rock",
			"state": null,
			"postcode": "78000",
			"country": "US",
			"password": null,
			"created_at": "2024-07-24T11:20:24+00:00",
			"updated_at": "2024-07-24T11:20:24+00:00"
		},
	],
	"meta": {
		"current_page": 1,
		"first_page_url": "https://developer.ola.cv/api/v1/contacts?page=1",
		"next_page_url": null,
		"path": "https://developer.ola.cv/api/v1/contacts",
		"per_page": 20,
		"prev_page_url": null,
	},
	"message": "Contacts retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Delete Contact

Delete a contact on your account.

::: info DELETE /api/v1/contacts/:id
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **id**<br>*string* | Set value to the ID of the contact to delete.    |

### Sample [Delete] Request

```shell
curl https://developer.ola.cv/api/v1/contacts/01j3j7h3c3mxr05g1jgmb3st2a \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X DELETE
```

### Sample [Delete] Response

```json
{
  "data": {
    "id": "01j3j7h3c3mxr05g1jgmb3st2a",
  },
  "message": "Contact deleted successfully."
}
```

Please see the [errors page](/errors) for other likely errors.

