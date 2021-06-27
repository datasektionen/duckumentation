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

const duckumentation = fs.readFileSync("./specifications/duckumentation.yml")
app.get("/api/duckumentation", (req, res) => res.send(duckumentation.toString()))
const nallen = fs.readFileSync("./specifications/nallen.yml")
app.get("/api/nallen", (req, res) => res.send(nallen.toString()))
const spam2 = ""
app.get("/api/spam2", (req, res) => res.send(spam2))
// Insert new API endpoints above this line
app.get("/api/*", (req, res) => res.send("Invalid API path"))

app.use('/', express.static('../client/build'))
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname+ "/../client/build/index.html")))
const PORT = configuration.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))