# express-answer
Convenience function for easier res.write

## Usage

``` js
const server = require('express')();

server.get('/hello/:name', (req, res) => {
  answer(res, 200, { message: `Hello, ${req.params.name}!` }));
});
```
