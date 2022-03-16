const getAge = (dateString = "1999/08/31") => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
const app = Vue.createApp({
  data() {
    return {
      el: "#facts",
      title: "Hello world",
      messagge: "About me",
      user: {
        name: "MarioMog",
        age: getAge(),
        genre: "male",
        facts: [
          { message: "My fullname its Mario Alejandro Morales Guerrero" },
          { message: "Actually I'm learning vue.js for entertainment purpose" },
          { message: "I dont know" },
        ],
      },
    };
  },
});
const mountApp = app.mount("#app");
