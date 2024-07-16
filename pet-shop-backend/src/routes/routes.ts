import { Router } from "express";
import Product from "../models/Product";

const router = Router();

//Get all
router.get("/produtos", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).send(allProducts);
  } catch (err) {
    res.status(400).json({ message: "Erro ao buscar produtos", error: err });
  }
});

//Get by name
router.get("/produtos/:name", async (req, res) => {
  try {
    const name = new RegExp(req.params.name, "i");
    const { limit } = req.body;
    const productFinded = await Product.find({ name })
      .sort({
        name: 1,
      })
      .limit(limit);
    return res.status(200).send(productFinded);
  } catch (err) {
    res.status(400).json({ message: "Erro ao buscar produto", error: err });
  }
});

//Create a product
router.post("/produto", async (req, res) => {
  try {
    await Product.create(req?.body);
    return res.status(204).send();
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Erro ao criar produto", error: err });
  }
});

//Delete product by id
router.delete("/produtos/:id", async (req, res) => {
  try {
    const __id = req.params.id;
    await Product.deleteOne({ __id });
    return res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: "Erro ao delter produtos", error: err });
  }
});

//Delete all products
router.delete("/produtos", async (req, res) => {
  try {
    await Product.deleteMany();
    return res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: "Erro ao delter produtos", error: err });
  }
});

export { router };
