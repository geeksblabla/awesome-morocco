type FormStatus = "idle" | "pending" | "success" | "error";

export type FormState = {
  message: string;
  status: FormStatus;
};

export const initialState: FormState = {
  message: "",
  status: "idle",
};

export const createErrorState = (message: string): FormState => ({
  message,
  status: "error",
});

export const createSuccessState = (message: string): FormState => ({
  message,
  status: "success",
});
