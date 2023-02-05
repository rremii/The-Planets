import express from "express"
import router from "./router"
import cors from "cors"


const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    optionsSuccessStatus: 200
  })
)
app.use("/static", express.static("static"))
app.use(express.json())
app.use("/api", router)

const startApp = async () => {
  try {
    app.listen(PORT, () => console.log(`${PORT} post is being listened`))
  } catch (e) {
    console.log(`some error at the app start \n${e}`)
  }
}

startApp()
