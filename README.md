# study-express-api

api 서버를 만들어보자

```zh
├── public
│   └── images
│       └── favicon.ico
├── src
│   ├── api
│   │   ├── index.js
│   │   └── v1
│   │       └── albums
│   │           ├── README.md
│   │           ├── controller.js
│   │           ├── index.js
│   │           └── model.js
│   ├── crawl
│   │   ├── index.js
│   │   └── melon.js
│   └── server.js
├── .env.json
├── .gitignore.json
├── package.json
└── yarn.lock
```

## Useage

- 디비연결을 위한 설정값을 추가해야 한다
  > mkdir .env.json

```json
{
  "port": 3500,
  "dbUrl": "mongoDB uri"
}
```

## References

- [mongoose](https://mongoosejs.com/docs/api/model.html)
- [mogno-db-cloud](https://cloud.mongodb.com/v2/5ddf61739ccf64c3b3b8f381#metrics/replicaSet/5ddf651bff7a253ea63f6ecb/explorer/test/albums/find)
- [leadjockey-git](https://github.com/LeadJockey/api-vote)
