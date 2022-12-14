# T9 predictive converter
![Screenshot 2022-08-25 at 19 16 21](https://user-images.githubusercontent.com/20334563/186728706-a95589b0-6ffc-4638-864d-5c22053037d6.png)



## Deployment

[https://t9.mareksurak.com](https://t9.mareksurak.com)

## App description

The app simulates T9 keyboard functionality used mostly on phones with keyboard. The API is returning corresponding predictions given numeric input.
For example, given the input `23`, the output is `ad, ae, af, bd, be, bf, cd, ce, cf`.

For more information about T9 follow these links:

- [T9 - predictive text](<https://en.wikipedia.org/wiki/T9_(predictive_text)>)
- [Phoneword](https://en.wikipedia.org/wiki/Phoneword)

## Project structure

```
├── api
  ├── constants
  ├── mocks
  ├── queries
  ├── types
  └──  utils
├── components
├── constants
├── pages
  ├── api
  └── index.tsx
├── public
├── styles
├── types
└── utils
```

## Architecture

### API

I used [Next API routes](https://nextjs.org/docs/api-routes/introduction) as an API endpoints as a Node.js serverless function. For app like this I consider solution provided by Next.js.

There are 2 endpoints:

- `/predictions` - returns list of all possible combinations given the numeric input
- `/words-list` - returns the real words given the numeric input (43556 -> 'hello')

List of real words is taken from [https://github.com/sindresorhus/word-list](https://github.com/sindresorhus/word-list).
From this list the hash table is created for better access and smaller time complexity. The list is huge, so the generated file with hash has 5.3MB.
Table is implemented in this format:
```
[
 2, ['a...', b...', 'c..'],
 3, ['d...', e...', 'f..'],
 4, ['g...', h...', 'i..'],
]
```
So when user input query `23` I know that I has to access key `2` and find among these values instead of going thorugh the whole list of words.

As you can imagine displaying all possible combinations can cause a performance issues both on the backend and frontend side so I decide to return only first 50 results (`MAX_WORD_LIST_COUNT`).
 
### UI

I created a simple keyboard UI with IPhone frame to create a realistic usage.
User can check `Use word list` checkbox to get real words from API.

### Performance improvements

- All request is cached thanks to `react-query` so for given the same input there is only 1 request to API.
- I implemented debounce for entering input with 500ms delay to not overload API
- As I mentioned earlier I am display max 50 results, cause I find out that the real words list is pretty huge and rendering thousans of elements was causing performance issues.

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- [Testing library](https://testing-library.com/)
- [Jest](https://jestjs.io/)

## Code quality tools

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [commitlint](https://commitlint.js.org/#/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://typicode.github.io/husky/#/)

## Github CI/CD

- Job running on `push/pull request` containing linters, unit tests and snapshots

## Additional configuration files

- [.browserlistrc](https://create-react-app.dev/docs/supported-browsers-features/)
- [editorconfig](https://editorconfig.org/)

## Development & Contributing

`yarn` - install neccessary dependencies

`yarn start` - start app on the localhost

`yarn test` - run unit and snapshot tests

## Demo

https://user-images.githubusercontent.com/20334563/186728528-aff11c04-abb5-4ed0-9ccd-70590ea41216.mov


