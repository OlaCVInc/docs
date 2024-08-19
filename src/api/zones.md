# DNS Zones

The DNS zones API endpoints allow you to list and view DNS zones on your account. A DNS zone houses DNS records for a domain on your account.

## List DNS Zones

Get a collection of DNS zones on your account.

::: info GET /api/v1/zones
:::

### Query Parameters

|     |  |
| -------- | ------- |
| **per_page**<br>*integer* | Specify how many records you want to retrieve per page. If not specified we use a default value of 20.    |
| **page**<br>*integer*    | Specify exactly what page you want to retrieve. If not specified we use a default value of 1.    |

### Sample [List] Request

```shell
curl https://developer.ola.cv/api/v1/zones \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [List] Response

```json
{
  "data": [
    {
      "id": "01j5ndqkhsfnxwhy9gjr93789z",
      "name": "somedomain.cv",
      "status": "pending",
      "name_servers": [
        "brad.ns.cloudflare.com",
        "coco.ns.cloudflare.com"
      ],
      "activated_at": null,
      "created_at": "2024-08-19T13:37:55.000000Z",
      "updated_at": "2024-08-19T13:37:55.000000Z"
    },
    {
      "id": "01j5nf5aq9hgfsgawf3a8jhda8",
      "name": "anotherdomain.cv",
      "status": "active",
      "name_servers": [
        "brad.ns.cloudflare.com",
        "coco.ns.cloudflare.com"
      ],
      "activated_at": "2024-08-15T16:53:30.000000Z",
      "created_at": "2024-08-14T14:08:22.000000Z",
      "updated_at": "2024-08-15T16:53:30.000000Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "first_page_url": "https://developer.ola.cv/api/v1/zones?page=1",
    "next_page_url": null,
    "path": "https://developer.ola.cv/api/v1/zones",
    "per_page": 20,
    "prev_page_url": null,
  },
  "message": "Zones retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.

## Fetch DNS Zone

Get details of a DNS zone on your account.

::: info GET /api/v1/zones/:id
:::

### Path Parameters

|     |  |
| -------- | ------- |
| **id**<br>*string* | Set value to the ID of the zone to fetch.    |

### Sample [Fetch] Request

```shell
curl https://developer.ola.cv/api/v1/zones/01j5nf5aq9hgfsgawf3a8jhda8 \
-H 'Accept: application/json' \
-H 'Authorization: Bearer eOHtWjgrRk4y20C58w25Y0FF0c8gEjvfo96rk17K6d3fe0b4' \
-H 'Content-Type: application/json'
```

### Sample [Fetch] Response

```json
{
  "data": {
    "id": "01j5nf5aq9hgfsgawf3a8jhda8",
    "name": "anotherdomain.cv",
    "status": "active",
    "name_servers": [
      "brad.ns.cloudflare.com",
      "coco.ns.cloudflare.com"
    ],
    "activated_at": "2024-08-15T16:53:30.000000Z",
    "created_at": "2024-08-14T14:08:22.000000Z",
    "updated_at": "2024-08-15T16:53:30.000000Z"
  },
  "message": "Zone retrieved successfully."
}
```

Please see the [errors page](/errors) for likely errors.