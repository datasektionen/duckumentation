import env from 'dotenv'
env.config()

export const configuration = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 5000,
}