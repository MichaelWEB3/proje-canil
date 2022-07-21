import { Response, Request } from "express";
import { createMenuObject } from "../helpers/createMenuObje";
import { Pete } from "../models/pet";

export const Home = (req: Request, resp: Response) => {
    const banner: object = {
        title: "Todos os animais",
        background: 'allanimals.jpg'
    }
    const list = Pete.getAll();
    resp.render('pages/page', {
        banner,
        objM: createMenuObject('all'),
        list
    })
}

export const Dogs = (req: Request, resp: Response) => {
    const banner: object = {
        title: "Todos os Cachorros",
        background: 'banner_dog.jpg'
    }
    const list = Pete.getOne('dog');
    resp.render('pages/page', {
        banner,
        objM: createMenuObject('dog'),
        list
    })
}

export const Cats = (req: Request, resp: Response) => {
    const banner: object = {
        title: "Todos os Gatos",
        background: 'banner_cat.jpg'
    }
    const list = Pete.getOne('cat');
    resp.render('pages/page', {
        banner,
        objM: createMenuObject('cat'),
        list
    })
}

export const Fishes = (req: Request, resp: Response) => {
    const banner: object = {
        title: "Todos os Peixes",
        background: 'banner_fish.jpg'
    }
    const list = Pete.getOne('fish');
    resp.render('pages/page', {
        banner,
        objM: createMenuObject('fish'),
        list
    })
}