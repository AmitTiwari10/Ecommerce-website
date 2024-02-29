import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCatrgoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }

    //check User
    const existingCategory = await categoryModel.findOne({ name });
    //existing User
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category Already Exists",
      });
    }
    //register User
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();

    return res.status(201).send({
      succes: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Category",
    });
  }
};

export const updateCatrgoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    //check User
    const category = await categoryModel.findOneAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    //existing User

    return res.status(200).send({
      succes: true,
      message: "category updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update Category",
    });
  }
};
