// UI Logic
window.onload = function() {
  let form = document.querySelector("form")
  form.onsubmit = function(event) {
    event.preventDefault();

    let over17 = document.getElementById("over17");
    over17.setAttribute('class', 'hidden');
    let under18 = document.getElementById("under18");
    under18.setAttribute('class', 'hidden');

    const age =parseInt(document.querySelector("input#ageInput").value) 

    if (age < 18) {
      under18.removeAttribute('class');
    } else if (age > 17) {
      over17.removeAttribute('class');
    }

  }
}