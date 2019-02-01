
const checkArticleDetails = (details) => {
  const { title, body } = details;
  if (!title || !body) {
    return true;
  }
  return false;
};

export default checkArticleDetails;
