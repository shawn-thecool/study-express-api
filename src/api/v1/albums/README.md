# melon top 100 albums

## Album Schema

```text
{
  name: { type: String, required: true, unique: true },
  song: { type: String, default: null },
  img: { type: String, default: null },
  hit: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null }
}
```

## Request Format

### getCrawlMelonData

- method : GET
- url : http://172.28.31.239:3000/api/v1/albums/reset
- response :

```text

```

### getAlbums

- method : GET
- url : http://172.28.31.239:3000/api/v1/albums
- response :

```text
[
  {
    "song": "song",
    "img": null,
    "updatedAt": null,
    "hit": 0,
    "_id": "5de0a230ab2b7526c32f7b2d",
    "name": "shawn4",
    "createdAt": "2019-11-29T04:44:32.298Z",
    "__v": 0
  },
  { ... },
  { ... },
]
```

### getAlbumByName

- method : GET
- url : http://172.28.31.239:3000/api/v1/albums/${name}
- response :

```text
[
  {
    "song": "song",
    "img": null,
    "hit": 0,
    "updatedAt": null,
    "_id": "5de0a230ab2b7526c32f7b2d",
    "name": "shawn4",
    "createdAt": "2019-11-29T04:44:32.298Z",
    "__v": 0
  }
]
```

### createAlbum

- method : POST
- url : http://172.28.31.239:3000/api/v1/albums
- request-body :

```text
{
   "name":"shawn",
   "song":"song",
   "img":"img"
}
```

- response :

```text
{
    "song": "song",
    "img": "img",
    "hit": 0,
    "updatedAt": null,
    "_id": "5de0d05965ba753ca2b68992",
    "name": "shawn",
    "createdAt": "2019-11-29T08:01:29.342Z",
    "__v": 0
}
```

### updateAlbum

- method : PUT
- url : http://172.28.31.239:3000/api/v1/albums/${name}
- request-body :

```text
{
   "name":"shawn1",
   "song":"song1",
   "img":"img1"
}
```

- response :

```text
{
    "song": "song1",
    "img": "img1",
    "hit": 0,
    "updatedAt": "2019-11-29T08:02:57.538Z",
    "_id": "5de0d05965ba753ca2b68992",
    "name": "shawn1",
    "createdAt": "2019-11-29T08:01:29.342Z",
    "__v": 0
}
```

### updateAlbumHit

- method : PATCH
- url : http://172.28.31.239:3000/api/v1/albums/${name}/hit
- response :

```text
{
    "song": "song1",
    "img": "img1",
    "hit": 0, <- whill be 1 (hit + 1)
    "updatedAt": "2019-11-29T08:02:57.538Z",
    "_id": "5de0d05965ba753ca2b68992",
    "name": "shawn1",
    "createdAt": "2019-11-29T08:01:29.342Z",
    "__v": 0
}
```

### deleteAlbum

- method : DELETE
- url : http://172.28.31.239:3000/api/v1/albums/one/${name}
- response :

```text
{
    "n": 1,
    "opTime": {
        "ts": "6764637035241144321",
        "t": 1
    },
    "electionId": "7fffffff0000000000000001",
    "ok": 1,
    "operationTime": "6764637035241144321",
    "$clusterTime": {
        "clusterTime": "6764637035241144321",
        "signature": {
            "hash": "SZC0NyZXPOrfIr9RU6f0uE9XbWI=",
            "keyId": "6763286757652824066"
        }
    },
    "deletedCount": 1
}
```

### deleteAlbumsByName

- method : DELETE
- url : http://172.28.31.239:3000/api/v1/albums/many
- request-body :

```text
{
    "names": [
        "shawn2",
        "shawn3"
    ]
}
```

- response :

```text
{
    "n": 2,
    "opTime": {
        "ts": "6764637808335257602",
        "t": 1
    },
    "electionId": "7fffffff0000000000000001",
    "ok": 1,
    "operationTime": "6764637808335257602",
    "$clusterTime": {
        "clusterTime": "6764637808335257602",
        "signature": {
            "hash": "4nEyhQLt+/W1MxQATe9I6sPvpoY=",
            "keyId": "6763286757652824066"
        }
    },
    "deletedCount": 2
}
```

### deleteAllAlbums

- method : DELETE
- url : http://172.28.31.239:3000/api/v1/albums/all

- response :

```text
{
    "n": 50,
    "opTime": {
        "ts": "6765653490791350322",
        "t": 1
    },
    "electionId": "7fffffff0000000000000001",
    "ok": 1,
    "operationTime": "6765653490791350322",
    "$clusterTime": {
        "clusterTime": "6765653490791350322",
        "signature": {
            "hash": "HBQxp33HzWnF2kP403e9BJ5GAzY=",
            "keyId": "6763286757652824066"
        }
    },
    "deletedCount": 50
}
```
