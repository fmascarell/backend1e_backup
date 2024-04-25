import { Router } from 'express';
import ProductManager from '../productManager.js';

const router = Router();

router.get('/', (req,res) => {
    const {limit} = req.query;
    const prod = new ProductManager();
    return res.json({ productos: prod.getProduct(limit)});
});

router.get('/:pid', (req,res) => {
    const {limit} = req.query;
    const prod = new ProductManager();
    return res.json({ producto: prod.getProductById(Number(pid))});
});

export default router;