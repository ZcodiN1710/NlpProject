const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

const handleApiCall = async (url, key) => {
  fullApiCall = `${baseUrl}${key}&url=${url}&lang=en`;
  console.log(fullApiCall);
  const fetchData = await fetch(fullApiCall);
  const responseData = await fetchData.json();
  const { agreement, subjectivity, confidence, irony } = responseData;
  // const Text = responseData.sentence_list[0].segment_list[0].text;
  const results = {
    agreement,
    subjectivity,
    confidence,
    irony,
    // Text,
  };
  return results;
};
module.exports = { handleApiCall };
