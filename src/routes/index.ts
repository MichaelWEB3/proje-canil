import { Router } from "express";
import { Home, Cats, Fishes, Dogs } from "../controllers/pageController";
import { Search } from "../controllers/searchController";
const route = Router()

route.get('/', Home)
route.get('/Dogs', Dogs)
route.get('/Cats', Cats)
route.get('/Fishes', Fishes)
route.get('/search', Search)


export default route