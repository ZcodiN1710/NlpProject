
const handleSubmit = () => {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", (eo) => {
    const inputEl = document.getElementById("inputURL");
    eo.preventDefault();
    const inputValue = inputEl.value;
    console.log(inputValue);
    postInputVlue("http://localhost:3000/inputValue", { url: inputValue });
  });
};
module.exports =  handleSubmit();
// export default  handleSubmit();

const postInputVlue = async (url = "", formData = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  try {
    const formData = await response.json();
    console.log(formData);
    const agreement = (document.querySelector(
      ".aggreement"
    ).innerHTML = `Aggreement: ${formData.agreement}`);
    const confidence = (document.querySelector(
      ".confidence"
    ).innerHTML = `Confidence: ${formData.confidence}`);
    const subjectivity = (document.querySelector(
      ".subjectivity"
    ).innerHTML = `Subjectivity: ${formData.subjectivity}`);
    const irony = (document.querySelector(
      ".irony"
    ).innerHTML = `Irony: ${formData.irony}`);
    // const text = (document.querySelector(
    //   ".text"
    // ).innerHTML = `Text: ${formData.Text}`);
  } catch (error) {
    console.log(error);
  }
};
