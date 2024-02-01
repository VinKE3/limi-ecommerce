"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ArrayItemsInput from "@/components/formInputs/ArrayItemsInput";
import ImageInput from "@/components/formInputs/ImageInput";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { useMakePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewProductForm({ categories, farmers }) {
  const { makePostRequest } = useMakePostRequest();
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholesale: false,
    },
  });
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");
  console.log(isActive);
  console.log(isWholesale);
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/products",
      data,
      "Product",
      reset,
      "/dashboard/products"
    );
    setImageUrl("");
    setTags([]);
  }

  return (
    <div>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product price (Before sale)"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale price (Discounted price)"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Stock"
            name="productStock"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Unit of Measurement (e.g. Kg, Litre, etc)"
            name="unit"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple={false}
          />
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
            multiple={false}
          />
          <ToggleInput
            label="Support Wholesale"
            name="isWholesale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
          />
          {isWholesale && (
            <>
              {" "}
              <TextInput
                label="Wholesale Price"
                name="wholesalePrice"
                type="number"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                label="Minimum Wholesale Qty"
                name="wholesaleQty"
                type="number"
                register={register}
                errors={errors}
                className="w-full"
              />
            </>
          )}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="proudctImageUploader"
            label="Product Image"
          />
          <ArrayItemsInput itemTitle="Tag" setItems={setTags} items={tags} />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product please wait..."
        />
      </form>
    </div>
  );
}
