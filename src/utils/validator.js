export const usernameValidator = (username) => {
    if (username.length < 3) {
      return "Username must be at least 3 characters long.";
    }
    if (!/^[a-zA-Z0-9_!@#$%^&*.()-+=]+$/.test(username)) {
      return "Username can only contain letters, numbers, underscores, and special characters";
    }
    return null; // No error
};
  