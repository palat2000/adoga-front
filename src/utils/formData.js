function createFormData(input) {
  const formData = new FormData();
  console.log(input);
  for (let key in input) {
    formData.append(key, input[key]);
  }
  return formData;
}

export default createFormData;
