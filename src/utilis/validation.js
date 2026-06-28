// Check email format
export const validateEmail = (email) => {
  return email.includes("@") && email.includes(".");
};

// Check form fields
export const validateForm = (name, email, company) => {
  if (name.trim() === "") {
    return "Name is required";
  }

  if (email.trim() === "") {
    return "Email is required";
  }

  if (!validateEmail(email)) {
    return "Enter valid email";
  }

  if (company.trim() === "") {
    return "Company name is required";
  }

  return "";
};