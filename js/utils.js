const maxLength = (text) => {
  return (text =
    text.length < 140 ? text : text.split('').join('').slice(0, 137) + '...');
};

export { maxLength };
