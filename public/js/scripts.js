// Define the cardList with dynamic data
const cardList = [
    {
        title: "British Shorthair",
        image: "images/kitten.jpg",
        link: "About the Breed",
        description: "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, pineapple eyes, and a medium-sized tail. "
      },
    {
      title: "Birman",
      image: "images/kitten-2.jpg",
      link: "About the Breed",
      description: "The Birman, also called the Sacred Cat of Burma, is a domestic cat breed. The Birman is a long-haired, colour-pointed cat distinguished by a silky coat, deep blue eyes, and contrasting white gloves on each paw. The breed name is derived from Birmanie, the French form of Burma."
    },
    {
      title: "Persian cat",
      image: "images/kitten-3.jpg",
      link: "About the Breed",
      description: "The Persian cat, also known as the Persian longhair, is a long-haired breed of cat characterized by a round face and short muzzle. The first documented ancestors of Persian cats might have been imported into Italy from Khorasan as early as around 1620, however this has not been proven."
    }
  ];
  
  // Function to add dynamic cards to the card-section
  const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend = '<div class="col s4 center-align">' +
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light">' +
        `<img class="activator" src="${item.image}">` +
        '</div><div class="card-content">' +
        `<span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>` +
        `<p><a href="#">${item.link}</a></p></div>` +
        '<div class="card-reveal">' +
        `<span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>` +
        `<p class="card-text card-desc-color">${item.description}</p>` +
        '</div></div></div>';
      $("#card-section").append(itemToAppend);
    });
  };
  
  // Function to display a message when the "Click Me" button is clicked
  const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
  };
  
  // Function to submit the form data
  const submitForm = () => {
    let formData = {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      password: $('#password').val(),
      email: $('#email').val()
    };
  
    console.log("Form Data Submitted: ", formData);
  };
  
  $(document).ready(function () {
    $('.materialboxed').materialbox();
    addCards(cardList); // Call the function to add dynamic cards
    $('.modal').modal();
    $('#formSubmit').click(() => {
      submitForm();
    });
  });
  