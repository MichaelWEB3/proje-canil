import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import mustache from "mustache-express";
import path from "path";
import mainRoute from "./routes";

//solicitando variaveis de ambiente
dotenv.config();
//inicando serve express
const server = express();

//declarando enginer mustacge
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, ('views')));
server.engine('mustache', mustache());

//acessando pasta public
server.use(express.static(path.join(__dirname, ('../public'))));

//iniciando rotas
server.use(mainRoute);

//routas de nao encontrado
server.use((req: Request, resp: Response) => {
    resp.send("Pagina não encontrada");
})

//iniciando server
server.listen(process.env.PORT);