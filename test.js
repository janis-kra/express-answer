/* eslint-disable node/no-unpublished-require */
const test = require('ava');
const WritableStream = require('stream').Writable;

const answer = require('./index');

class MockResponse extends WritableStream {
  status (s) {
    this.lastStatus = s;
  }
  write (w) {
    this.lastWrite = w;
  }
  writeHead (h) {
    this.lastHead = h;
  }
}

test('write status', (t) => {
  const res = new MockResponse();
  const expected = 200;
  answer(res, expected, null);
  t.is(res.lastStatus, expected);
});

test('write message', (t) => {
  const res = new MockResponse();
  const expected = 'Befehl von ganz unten';
  answer(res, 0, expected);
  t.is(res.lastWrite, JSON.stringify(expected));
});
