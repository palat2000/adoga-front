function createFormData(input) {
  const formData = new FormData();
  for (let key in input) {
    formData.append(key, input[key]);
  }
  return formData;
}

export default createFormData;
