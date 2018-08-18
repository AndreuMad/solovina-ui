export const getMessages = (messages, language) => {
  const languageWithoutRegionCode = language
    .toLowerCase()
    .split(/[_-]+/)[0];
  return messages[language] || messages[languageWithoutRegionCode];
};

export default getMessages;
