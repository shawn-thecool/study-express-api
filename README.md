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
│   │           ├── controller.js
│   │           ├── index.js
│   │           └── model.js
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
