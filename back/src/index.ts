import express, {Request, Response} from "express";
import cors from "cors";
import compression from "compression";

const app = express();

const corsOption: cors.CorsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    preflightContinue: false,
    allowedHeaders: ["Content-Type", "Authorization", "Content-Security-Policy"]
};

app.use(cors(corsOption));
app.use(compression());

app.use(express.json());

app.get("/", (req:Request, res:Response) => res.send("I working!"))
app.listen(5000, () => console.log("Listening") );
