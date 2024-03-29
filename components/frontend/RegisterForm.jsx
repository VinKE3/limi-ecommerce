"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../formInputs/SubmitButton";
import TextInput from "../formInputs/TextInput";

export default function RegisterForm({ role = "USER" }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        const newUser = responseData.data;
        console.log(newUser);
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        //?if roles = user => home
        //*if role = farmer => dashboard/farmers
        if (role === "USER") {
          router.push("/");
        } else {
          router.push(`/onboarding/${newUser.id}`);
        }
      } else {
        setLoading(false);
        if (response.status === 409) {
          console.log(responseData.error);
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <TextInput
        label=""
        name="role"
        register={register}
        errors={errors}
        isRequired={true}
        defaultValue={role}
        type="hidden"
        className="sm:col-span-2 mb-3"
      />
      <TextInput
        label="Full Name"
        name="name"
        register={register}
        errors={errors}
        isRequired={true}
        type="text"
        className="sm:col-span-2 mb-3"
      />
      <TextInput
        label="Email Address"
        name="email"
        register={register}
        errors={errors}
        isRequired={true}
        type="email"
        className="sm:col-span-2 mb-3"
      />
      <TextInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
        isRequired={true}
        type="password"
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Register"
        loadingButtonTitle="Creating Please Wait..."
      />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-4">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-purple-600 hover:underline dark:text-purple-500"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
