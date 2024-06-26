import { Router } from 'express';
import ProductManager from '../productManager.js';

const router = Router();

router.get('/', (req,res) => {
    const {limit} = req.query;
    console.log(req.query);
    const prod = new ProductManager();
    return res.json({ productos: prod.getProduct(limit)});
});

router.get('/:pid', (req,res) => {
    const { pid } = req.params; // Obtener pid de los parámetros de la ruta
    const prod = new ProductManager();
    return res.json({ producto: prod.getProductById(Number(pid))});
});

router.post('/',(req,res)=>{
    const{title,description,price,thumbnails,code,stock,category,status}=req.body;
    const prod = new ProductManager();
    const resultado = prod.addProduct(title,description,price,thumbnails,code,stock,category,status);
    return res.json({resultado});
});

router.put('/:pid',(req,res)=>{
    const { pid }=req.params;
    const prod = new ProductManager();
    const resultado = prod.updateProduct(Number(pid),req.body);
    return res.json({resultado});
});

router.delete('/:pid',(req,res)=>{
    const { pid }=req.params;
    const prod = new ProductManager();
    const resultado = prod.deleteProduct(Number(pid));
    return res.json({resultado});
});

export default router;