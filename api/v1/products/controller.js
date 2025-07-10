const { Product } = require("../../../models/product_schema");

const createProductController = async (req, res) => {
  try {
    const data = req.body;
    console.log("creating product...", data);

    Object.keys(data).forEach((key) => {
      if (key == null || key == "") {
        delete data.key;
      }
    });

    let newProduct = await Product.create(data);
    res.status(201).json({
      isSuccess: true,
      message: `Product created`,
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log("🔴 Error in createProductController");
    if (err.name === "ValidationError" || err.code == "11000") {
      res
        .status(400)
        .json({ isSuccess: false, message: `Err: ${err.message}`, data: {} });
    }
    res
      .status(501)
      .json({ isSuccess: false, message: "Internal Server Error", data: {} });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const AllProducts = await Product.find();
    res.status(200).json({
      isSuccess: true,
      message: "product list fetched",
      data: {
        products: AllProducts,
      },
    });
  } catch (err) {
    console.log("error in get all product--->", err.message);
    res.status(501);
    res.json({
      isSuccess: false,
      message: "Internal server error",
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const newData = req.body;
    const newProduct = await Product.findByIdAndUpdate(productId, newData, {
      new: true, //to show the updated value on post man
      runValidators: true, //to does not patch the negative or wrong value
    });

    res.status(200).json({
      isSuccess: "true",
      message: "product updates",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log("error in get all product--->", err.message);
    res.status(501);
    res.json({
      isSuccess: false,
      message: "Internal server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const delProduct = await Product.findByIdAndDelete(productId);
    console.log(!delProduct);
    if (delProduct) {
      res.status(200).json({
        isSuccess: "true",
        message: "product deleted",
        data: {},
      });
    } else {
      res.status(400).json({
        isSuccess: false,
        message: "data not found",
        data: {},
      });
      // console.log(err.message);
    }
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "product not deleted",
      data: {},
    });
    console.log("-------------not deleted-------------");
    console.log(err.message);
  }
};
module.exports = {
  createProductController,
  getAllProducts,
  updateProductController,
  deleteProduct,
};
