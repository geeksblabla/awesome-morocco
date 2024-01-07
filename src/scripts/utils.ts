export type Operation = {
  label: string;
  isSuccess: boolean;
};

export const logResults = (operations: Operation[]) => {
  console.log(`\n Operations results (✅: success,❌: error ): \n`);
  operations.forEach((operation) => {
    console.log(`${operation.isSuccess ? "✅" : "❌"} : ${operation.label}`);
  });
};
