const express = require('express');

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"});
});