import { IncomingForm, Files, Fields } from "formidable";
import fs from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { connectionStr } from "@/lib/db";
import { Products } from "@/lib/model/product";
import mongoose from "mongoose";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface ProductInput {
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  id: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await mongoose.connect(connectionStr);
      const data = await Products.find();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error in GET request:", error);
      res
        .status(500)
        .json({
          message: "Server error",
          error: error instanceof Error ? error.message : "Unknown error",
        });
    }
  } else if (req.method === "POST") {
    try {
      await mongoose.connect(connectionStr);

      const form = new IncomingForm({
        multiples: true,
        keepExtensions: true,
      });

      form.parse(
        req,
        async (err: Error | null, fields: Fields, files: Files) => {
          if (err) {
            console.error("Error parsing form:", err);
            return res.status(500).json({ error: "Error parsing form data" });
          }

          console.log("Fields received:", fields);
          console.log("Files received:", files);

          let productsField = fields.products;
          if (!productsField) {
            return res.status(400).json({ error: "Products data is missing" });
          }

          let parsedProducts: ProductInput[];
          try {
            parsedProducts = JSON.parse(
              Array.isArray(productsField) ? productsField[0] : productsField
            ) as ProductInput[];
          } catch (parseError) {
            return res
              .status(400)
              .json({ error: "Invalid products data format" });
          }

          const newProducts = [];

          for (let i = 0; i < parsedProducts.length; i++) {
            const product = parsedProducts[i];
            const file = Array.isArray(files.images)
              ? files.images[i]
              : files.images;

            if (!file) {
              return res.status(400).json({ error: "Image file is missing" });
            }

            const uploadDir = path.join(process.cwd(), "public/uploads");
            const fileName = `${Date.now()}_${file.originalFilename}`;
            const newPath = path.join(uploadDir, fileName);

            await fs.mkdir(uploadDir, { recursive: true });
            await fs.copyFile(file.filepath, newPath);
            await fs.unlink(file.filepath);

            const newProduct = new Products({
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              image: `/uploads/${fileName}`,
              rating: product.rating,
              id: product.id,
            });

            await newProduct.save();
            newProducts.push(newProduct);
          }

          res.status(201).json({
            message: "Products created successfully",
            products: newProducts,
          });
        }
      );
    } catch (error) {
      console.error("Error in POST request:", error);
      res
        .status(500)
        .json({
          message: "Server error",
          error: error instanceof Error ? error.message : "Unknown error",
        });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
