const form = document.querySelector ('form')

form.addEventListener ('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector ('#heightCM').value)
    const weight = parseInt(document.querySelector ('#weightKG').value)
    const result = document.querySelector ('.result');

    if (height < 0 || height === '' || isNaN (height)) {
        result.innerHTML = "Please Enter a valid height"
    }
    else if (weight < 0 || weight === '' || isNaN (weight)) {
        result.innerHTML = "Please Enter a valid weight"
    }
    else {
        const bmi = (weight / ((height*height)/1000)).toFixed(2);
        // Show the result
        result.innerHTML = `<span style="margin:81px;">BMI: ${bmi}</span>`

    }


}); 