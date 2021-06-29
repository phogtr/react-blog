interface errorObject {
  errorMessage: Array<string>;
  path: string;
}

export const toErrorMap = (errors: errorObject) => {
  const errorMap: Record<string, string> = {};
  const { errorMessage, path } = errors;
  const field = path.substring(path.indexOf(".") + 1);
  const message = errorMessage[0];
  errorMap[field] = message;

  return errorMap;
};
