const formValidation = () => {
  const alert = document.getElementById('alert');
  const userid = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const country = document.getElementById('country');
  const zipcode = document.getElementById('zip').value;
  const email = document.getElementById('email').value;
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  const language = document.getElementById('language').value;
  if (userid_val(userid, 5, 12)) {
    alert.innerHTML = "" + userid_val(userid, 5, 12);
    return;
  } else if (password_val(password, 5, 12)) {
    alert.innerHTML = "" + password_val(password, 7, 12);
    return;
  } else if (name_val(name)) {
    alert.innerHTML = "" + name_val(name);
    return;
  } else if (country_val(country)) {
    alert.innerHTML = "" + country_val(country);
    return;
  } else if (zip_val(zipcode)) {
    alert.innerHTML = "" + zip_val(zipcode);
    return;
  } else if (email_val(email)) {
    alert.innerHTML = "" + zip_val(email);
    return;
  } else if (sex_val(male, female)) {
    alert.innerHTML = "" + sex_val(male, female);
    return;
  }
  else alert.innerHTML = "Your submission was successful!";
}

const userid_val = (id, min, max) => {
  const id_len = id.length;
  if (id_len == 0 || id_len < min || id_len > max) {
    return `* User ID must be between ${min} and ${max} characters.`;
  }
  return false;
}

const password_val = (pw, min, max) => {
  const pw_len = pw.length;
  if (pw_len == 0 || pw_len < min || pw_len > max) {
    return `* Password must be between ${min} and ${max} characters.`;
  }
  return false;
}

const name_val = (name) => {
  const letters = /^[A-Za-z\s]+$/;
  if (name.length == 0 || !name.match(letters)) {
    return `* Name is required and must include only letters`;
  }
  return false;
}

const country_val = (country) => {
  if (country.selectedIndex < 1) {
    return `* Please select a country.`;
  };
  return false;
}

const zip_val = (zip) => {
  const numbers = /^[0-9]+$/;
  if (zip.length == 0 || !zip.match(numbers)) {
    return `* Zip code is required and must include only numbers`;
  }
  return false;
}

const email_val = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length == 0 || !email.match(regex)) {
    return `* Please include a valid email address.`;
  }
  return false;
}

const sex_val = (male, female) => {
  if (!male.checked && !female.checked) {
    return `* Please select your sex.`;
  }
  return false;
}


