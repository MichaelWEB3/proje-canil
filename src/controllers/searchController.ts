import { Response, Request } from "express";
import { createMenuObject } from "../helpers/createMenuObje";
import { Pete } from "../models/pet";


export const Search = (req: Request, resp: Response) => {
    const banner: object = {
        title: "Pagina de pesquisa",
    }
    const pespes: string = req.query.pesq as string
    const list = Pete.getFromName(pespes);
    resp.render('pages/page', {
        banner,
        objM: createMenuObject(''),
        list
    })
}