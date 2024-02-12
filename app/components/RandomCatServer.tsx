import express, {Request, Response} from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import RandomCat from './RandomCatsClient';

const app = express();

app.get('/', (req: Request, res: Response) => {
    const html = renderToString(<RandomCat />);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Random Cat</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="client.bundle.js"></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
