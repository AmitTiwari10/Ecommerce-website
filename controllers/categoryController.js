import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
import mongoose from "mongoose";

//create Category
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

    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};

//update Category
export const updateCatrgoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    console.log("name", name);
    console.log("id", id);
    //check User
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    //existing User
    console.log("category", category);
    res.status(200).send({
      succes: true,
      message: "category updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in update Category",
    });
  }
};

//get All Category
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All category List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in while getting Category",
    });
  }
};

//single get Category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get Single Category Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in while getting Single Category",
    });
  }
};

//delete Category
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id', id)
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in while deleting Category",
    });
  }
};
