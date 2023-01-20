// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const gamerTagRegex = /^(?=.[A-Za-z])(?=.[!@#$%^&\d])[A-Za-z\d!@#$%^&]{8,}$/;

function validateGamerTag(gamerTag) {
  return gamerTagRegex.test(gamerTag);
}

module.exports = {
  validateGamerTag, isEmpty
};