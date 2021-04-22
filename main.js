const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const classification = [
    {
        'id': 0,
        'title': 'In progress',
    },
    {
        'id': 1,
        'title': 'Favorites',
    },
    {
        'id': 2,
        'title': 'Issues',
    },
    {
        'id': 3,
        'title': 'Git integration',
    }
]

const Web = [
    {
        "id":0,
        "title": "NodeJS",
        "sub": "NodeJS is ...",
        "classification":classification[0].title
    },
    {
        "id":1,
        "title": "React",
        "sub": "React is ...",
        "classification":classification[1].title
    },
    {
        "id":2,
        "title": "Vue",
        "sub": "Vue is ...",
        "classification":classification[2].title
    }

]

const data = [
    {
        'id': 0,
        'title': 'Web',
        'contents': Web
    },
    {
        'id': 1,
        'title': 'AI',
        'contents': null
    },
    {
        'id': 2,
        'title': 'CS',
        'contents': null
    },
    {
        'id': 3,
        'title': 'Metaverse',
        'contents': null
    },
    {
        'id': 4,
        'title': 'OS',
        'contents': null
    },
    {
        'id': 5,
        'title': 'Mobile',
        'contents': null
    }
  ]

app.get('/api/data', (req, res) => {
    res.send(data);
});
// app.get('/api/classification', (req, res) => {
//     res.send(classification);
// });

app.listen(port, () => console.log(`Listening on port ${port}`));