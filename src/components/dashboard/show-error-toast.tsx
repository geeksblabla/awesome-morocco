import { DefaultErrorShape } from "@trpc/server";
import { toast } from "react-hot-toast";
import { typeToFlattenedError } from "zod";

export type ServerError = {
  shape: DefaultErrorShape; // the default error shape
  data: {
    zodError?: typeToFlattenedError<any, string> | null;
  };
};
export const showErrorToast = (error: ServerError) => {
  const message = error.shape.message;

  const errorMessage = error.data?.zodError?.fieldErrors;

  const errors = Object.values(errorMessage || {});
  if (errors && errors.length > 0) {
    const message = errors
      .flat()
      .filter((e) => e !== undefined)
      .join("\n");
    toast.error(message);
    return;
  }

  if (message) {
    toast.error(message);
    return;
  }
};
