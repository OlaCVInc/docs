# DNS Records

The DNS records API endpoints allow you view and manage DNS records belonging to each DNS zone on your account.

## List DNS Records

Get a collection of DNS records in a zone on your account.

::: info GET /api/v1/zones/:id/records
:::

### Query Parameters

|     |  |
| -------- | ------- |
| **per_page**<br>*integer* | Specify how many records you want to retrieve per page. If not specified we use a default value of 20.    |
| **page**<br>*integer*    | Specify exactly what page you want to retrieve. If not specified we use a default value of 1.    |

### Sample [List] Request

```shell
curl https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [List] Response

```json
{
  "data": [
    {
      "id": "01j3gj1jjnm14bjkz3wgk4d9mt",
      "zone_id": "01j5nf5aq9hgfsgawf3a8jhda8",
      "name": "anotherdomain.cv",
      "type": "A",
      "content": "198.51.100.4",
      "ttl": 3600,
      "comment": "Domain activation",
      "created_at": "2024-08-14T14:08:22.000000Z",
      "updated_at": "2024-08-15T16:53:30.000000Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "first_page_url": "https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records?page=1",
    "next_page_url": null,
    "path": "https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records",
    "per_page": 20,
    "prev_page_url": null,
  },
  "message": "Zone records retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Fetch DNS Record

Get details of a DNS record in a zone on your account.

::: info GET /api/v1/zones/:zoneid/records/:recordid
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **zoneid**<br>*string* | Set value to the ID of the zone to fetch.    |
| **recordid**<br>*string* | Set value to the ID of the zone record to fetch.    |

### Sample [Fetch] Request

```shell
curl https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records/01j3gj1jjnm14bjkz3wgk4d9mt \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [Fetch] Response

```json
{
  "data": {
    "id": "01j3gj1jjnm14bjkz3wgk4d9mt",
    "zone_id": "01j5nf5aq9hgfsgawf3a8jhda8",
    "name": "anotherdomain.cv",
    "type": "A",
    "content": "198.51.100.4",
    "ttl": 3600,
    "comment": "Domain activation",
    "created_at": "2024-08-14T14:08:22.000000Z",
    "updated_at": "2024-08-15T16:53:30.000000Z"
  },
  "message": "Zone record retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Create DNS Records

Create a new DNS record in a zone on your account.

::: info POST /api/v1/zones/:id/records
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **id**<br>*string* | Set value to the ID of the zone to create record for.    |

### Body Parameters

|     |  |
| -------- | ------- |
| **type**<br>*string* | The `type` of DNS record which could be one of `A, AAAA, CNAME, MX, TXT, DKIM, SPF, DMARC, SRV`.    |
| **name**<br>*string* | The name of DNS record which could be one of `@` for the zone root, or a subdomain e.g. `domain.cv`. It must be 255 characters long or less.    |
| **ttl**<br>*integer* | Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400.    |
| **content**<br>*string* | The content of the DNS record which varies with the type of record.    |
| **comment**<br>*string* [Optional] | Comments or notes about the DNS record. This field has no effect on DNS responses.    |
| **priority**<br>*string* [Sometimes] | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.    |


### Sample [Create] Request

```shell
curl https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"type": "MX",
"name": "@",
"content": "smtp.google.com",
"priority": 1,
"ttl": 60
}'
```

### Sample [Create] Response

```json
{
  "data": {
    "id": "01j83bakvc39rj88q92pyqev48",
    "zone_id": "01j5nf5aq9hgfsgawf3a8jhda8",
    "name": "anotherdomain.cv",
    "type": "MX",
    "content": "smtp.google.com",
    "ttl": 60,
    "comment": null,
    "created_at": "2024-09-18T19:56:38.000000Z",
    "updated_at": "2024-09-18T19:56:38.000000Z"
  },
  "message": "DNS record created successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Update DNS Records

Update a DNS record in a zone on your account.

::: info POST /api/v1/zones/:zoneid/records/:recordid
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **zoneid**<br>*string* | Set value to the ID of the zone to update record for.    |
| **recordid**<br>*string* | Set value to the ID of the record to update.    |

### Body Parameters

|     |  |
| -------- | ------- |
| **type**<br>*string* | The `type` of DNS record which could be one of `A, AAAA, CNAME, MX, TXT, DKIM, SPF, DMARC, SRV`.    |
| **name**<br>*string* | The name of DNS record which could be one of `@` for the zone root, or a subdomain e.g. `domain.cv`. It must be 255 characters long or less.    |
| **ttl**<br>*integer* | Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400.    |
| **content**<br>*string* | The content of the DNS record which varies with the type of record.    |
| **comment**<br>*string* [Optional] | Comments or notes about the DNS record. This field has no effect on DNS responses.    |
| **priority**<br>*string* [Sometimes] | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.    |


### Sample [Update] Request

```shell
curl https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records/01j83bakvc39rj88q92pyqev48 \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"type": "MX",
"name": "@",
"content": "mx.zoho.eu.",
"priority": 10,
"ttl": 60
}'
```

### Sample [Update] Response

```json
{
  "data": {
    "id": "01j83bakvc39rj88q92pyqev48",
    "zone_id": "01j5nf5aq9hgfsgawf3a8jhda8",
    "name": "anotherdomain.cv",
    "type": "MX",
    "content": "mx.zoho.eu.",
    "ttl": 60,
    "comment": null,
    "created_at": "2024-09-18T19:56:38.000000Z",
    "updated_at": "2024-09-18T19:56:38.000000Z"
  },
  "message": "DNS record updated successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Delete DNS Records

Delete a DNS record in a zone on your account.

::: info POST /api/v1/zones/:zoneid/records/:recordid
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **zoneid**<br>*string* | Set value to the ID of the zone to delete record for.    |
| **recordid**<br>*string* | Set value to the ID of the record to delete.    |


### Sample [Delete] Request

```shell
curl https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8/records/01j83bakvc39rj88q92pyqev48 \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json' \
-X DELETE 
```

### Sample [Delete] Response

```json
{
  "data": {
    "id": "01j83bakvc39rj88q92pyqev48"
  },
  "message": "DNS record deleted successfully."
}
```

Please see the [errors page](/errors) for likely errors.