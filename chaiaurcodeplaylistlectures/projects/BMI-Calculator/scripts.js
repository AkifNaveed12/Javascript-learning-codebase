const form = document.querySelector(`form`);
//this usecase will give you empty values
form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    const height  = parseInt(document.querySelector(`#height`).value);
    const weight  = parseInt(document.querySelector(`#weight`).value);
    const results = document.querySelector(`#results`);
    const resultStatement = document.querySelector(`#result-statement`);
    const reset = document.querySelector(`#reset`);

    if( height < 0 || isNaN(height) || (height <50) || (height > 250) ){
        if((height <50) || (height > 250)){
            results.innerHTML = `<span id="red-warnings">Height must be between 50 cm and 250 cm.<br>You entered:  ${height}</span>`;
        }
        else if(isNaN(height)){
            results.innerHTML = `<span id="red-warnings">Height must contain numbers only.<br>You entered: ${height}</span>`;
        }
        else{
            results.innerHTML = `<span id="red-warnings">Height must be greater than 0.<br>You entered: ${height}</span>`;
        }
        resultStatement.innerHTML = ``;
    }
    else if(weight < 0 || isNaN(weight) || (weight < 2) || (weight > 300) ){
        if((weight <2) || (weight > 300)){
            results.innerHTML = `<span id="red-warnings">Weight must be between 2Kg and 300Kg.<br>You entered:  ${weight}</span>`;
        }
        else if(isNaN(weight)){
            results.innerHTML = `<span id="red-warnings">Weight must contain numbers only.<br>You entered: ${weight}</span>`;
        }
        else{
            results.innerHTML = `<span id="red-warnings">Weight must be greater than 2Kg and less than 300Kg.<br>You entered: ${weight}</span>`;
        }
        resultStatement.innerHTML = ``;
    }
    else{
        const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));
        //update on the screen, show on result
        results.innerHTML = `<span>BMI: ${bmi} </span>`;
        // console.log(bmi);  just for debugging
        // console.log(typeof bmi);

        // console.log(height * height);
        // console.log((height*height)/10000);
        // console.log(weight/((height * height) /10000));
        // console.log(typeof ( weight/((height * height)/ 10000)));


        switch(true){
            case bmi < 18.6:
                // console.log(bmi); just for debugging
                // console.log(typeof bmi);
                resultStatement.innerHTML = `<span id="red-warnings">Under Weight!<br>Consider regular exercise and a balanced diet.</span>`;
                break;
            case bmi >= 18.6 && bmi <= 24.9:
                resultStatement.innerHTML = `<span id="green-warnings">Healthy Weight!<br>Keep maintaining your current lifestyle.</span>`;
                break;
            case bmi > 24.9:
                resultStatement.innerHTML = `<span id="red-warnings"">Over Weight!<br>Consider regular exercise and a balanced diet.</span>`;
                    break;
            default:
                resultStatement.innerText = `<span id="red-warnings">Enter the correct values of height(50-250) and weight(2-300).</span>`;
                    break;
        }
    }
    
});
form.reset.addEventListener(`click`, function(e){
        e.preventDefault();
        document.querySelector(`#height`).value = ``;
        document.querySelector(`#weight`).value = ``;
        document.querySelector(`#results`).innerHTML = ` `;
        document.querySelector(`#result-statement`).innerHTML = ` `;
    })