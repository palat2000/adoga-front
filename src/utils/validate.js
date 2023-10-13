const validate = (schema, input) => {
  const { error } = schema.validate(input, { abortEarly: false });
  let res;
  if (error) {
    res = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
  return res;
};

export default validate;
