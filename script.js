$(document).ready(function() {
  // Listen for changes in the inputs on the first screen
  $('.text-input, input[type="radio"]').on('input', function() {
      // Check if all required inputs are filled or selected
      if ($('#name-input').val() !== '' && $('input[name="type"]:checked').length > 0 && $('input[name="licenseType"]:checked').length > 0) {
          // If all required inputs are filled or selected, slide up the first screen and slide down the second screen
          $('.screen1').slideUp();
          $('.screen2').slideDown();
      }
  });
});
document.getElementById('submit-btn').addEventListener('click', function() {
  // Check if all required inputs are filled or selected
  if ($('#name-input').val() !== '' && $('input[name="type"]:checked').length > 0 && $('input[name="licenseType"]:checked').length > 0) {
      // If all required inputs are filled or selected, slide up the first screen and slide down the second screen
      $('.screen1').slideUp();
      $('.screen2').slideDown();
  }
});



function submitForm() {
  // Your form submission logic here
}

document.getElementById('license-years').addEventListener('change', function() {
  var selectedYears = this.value;
  console.log('Selected license years:', selectedYears);
  // You can add your logic here to handle the selected license years
});



$(document).ready(function() {
  $('#Back').click(function() {
      // You can add your logic here for the next question
      console.log('Back');
  });

  $('#drivingLicenseForm').submit(function(event) {
      event.preventDefault();

      const name = $('#name-input').val();
      const licenseType = $('input[name="licenseType"]:checked').val();
      const licenseNature = $('input[name="type"]:checked').val();

      console.log(`Name: ${name}`);
      console.log(`Type of Previous Driving License: ${licenseType}`);
      console.log(`Nature of Driving License: ${licenseNature}`);

      // You can send the data to the server here using AJAX or Fetch API

      // Reset the form
      $('#drivingLicenseForm').trigger('reset');
  });
});


