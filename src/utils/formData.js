function createFormData(input) {
  const formData = new FormData();
  for (let key of input) {
    formData.append(key, input[key]);
  }
  return formData;
}

export default createFormData;
