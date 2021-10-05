import express from 'express'
const app = express()
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
// https://github.com/nodejs/help/issues/2907#issuecomment-757446568
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { configuration } from './configuration.js'

app.use(cors());
app.use(express.json())

if (configuration.NODE_ENV === "development") app.use(morgan('dev'))
else app.use(morgan("common"))

const configure = (specification) => {
    const { name } = path.parse(specification)
    const system = fs.readFileSync(path.resolve(`${__dirname}/specifications/${specification}`));
    app.get(`/api/${name}`, (req, res) => res.send(system.toString()));
}

const specifications = fs.readdirSync(`${__dirname}/specifications/`)
specifications.map(system => configure(system));

// Insert new API endpoints by adding more files to /specifications
app.get("/api/*", (req, res) => res.send("Invalid API path"))

app.use("/", express.static(path.join(`${__dirname}/../client/build`)))
app.get('*', (req, res) => res.sendFile(path.resolve(`${__dirname}/../client/build/index.html`)))
const PORT = configuration.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
