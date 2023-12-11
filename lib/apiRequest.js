import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useMakePostRequest() {
  const router = useRouter();

  const makePostRequest = async (
    setLoading,
    endpoint,
    data,
    resourceName,
    reset,
    redirectEndpoint
  ) => {
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setLoading(false);
        toast.success(`New ${resourceName} Created Successfully`);
        reset();
        router.push(redirectEndpoint);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const makePutRequest = async (
    setLoading,
    endpoint,
    data,
    resourceName,
    redirect,
    reset
  ) => {
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        toast.success(`${resourceName} Updated Successfully`);
        redirect();
      } else {
        setLoading(false);
        toast.error("Something Went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return { makePostRequest, makePutRequest };
}
