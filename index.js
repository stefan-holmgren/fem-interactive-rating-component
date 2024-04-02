console.log("HEY");
// Base the state of the component on the presence of a `rating` query parameter
const rating = parseInt(new URLSearchParams(window.location.search).get("rating") ?? 0, 10);
document.querySelector("main").dataset.state = "unrated";

if (rating >= 1 && rating <= 5) {
  document.querySelector("main").dataset.state = "rated";
  document.querySelector("#rating").dataset.rating = rating;
}

const form = document.querySelector(".section-unrated form");
const submitButton = form.querySelector("button[type=submit]");

const updateSubmitEnabled = () => {
  const rating = new FormData(form).get("rating");
  submitButton.disabled = !rating;
};

// Browser history will try to restore the form state when navigating back
window.addEventListener("pageshow", updateSubmitEnabled);

// Update the submit button state when the form changes
form.addEventListener("change", updateSubmitEnabled);
