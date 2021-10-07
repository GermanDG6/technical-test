const isEmail = (email) => {
  return /^\w+@\w+\.\w+$/gi.test(email);
};

module.exports = isEmail;
