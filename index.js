module.exports = function answer (res, status, message) {
  if (message) {
    const json = JSON.stringify(message);
    res.writeHead(status, {
      'Content-Length': Buffer.byteLength(json, 'utf-8'),
      'Content-Type': 'text/json; charset=utf-8'
    });
    res.write(json);
  } else {
    res.sendStatus(status);
  }
  res.end();
};
