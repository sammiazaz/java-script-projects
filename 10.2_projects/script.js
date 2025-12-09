let form = document.querySelector('form');

form.addEventListener('submit', 
    function(e)
    {
        e.preventDefault()
        let heigth = parseInt(document.querySelector('#height').value)
        let weight = parseInt(document.querySelector('#weight').value)
        let result = document.querySelector('#result')

        if( heigth == ' ' || heigth < 0|| isNaN(heigth)){
            result.textContent = 'please give valid height';
        }else if( weight == ' ' || weight < 0 || isNaN(weight)){
            result.textContent = 'please enter valid weight';
        }else{
            let bmi = (weight / ((heigth * heigth) / 10000)).toFixed(2);
            result.textContent = `Your BMI is ${bmi}`;
        }

    }
);