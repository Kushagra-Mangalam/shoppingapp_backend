const express = require("express");
const {
  createProductController,
  getAllProducts,
  updateProductController,
  deleteProduct,
} = require("./controller");

const productRouter = express.Router();

// productRouter.get("/", (req, res) => {
//   res.json({
//     isSuccess: true,
//     message: "Product list fetched",
//     data: {},
//   });
// });

productRouter.get("/", getAllProducts);
productRouter.post("/", createProductController);

productRouter.patch("/:productId", updateProductController);

productRouter.delete("/:idData", deleteProduct);

// productRouter.post("/");
module.exports = { productRouter };
