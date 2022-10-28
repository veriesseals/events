// -------------------------------------------------------------
// Form Javascript 

// -------------------------------------------------------------
// Button Functionality (must Click button to see results in console)

const submitBtn = document.getElementById('submitBtn');
// console.log(subitBtn);

let data = {};

const subscribeUser =() => {
        const fName = document.getElementById('fName').value;
        const lName = document.getElementById('lName').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        
        // get the year using slice to cut the string
        const year = dob.slice(0, 4);
        // 1977-03-12

        const month = dob.slice(5, 7);
        const date = dob.slice(8);
    
        // -------------------------------------------------------------
        // Get Plan Type
    
        const planType = document.querySelector('input[name=planType]:checked').value;
        console.log(planType);
    
        data.firstName = fName;
        data.lastName = lName;
        data.email = email;
        data.month = month;
        data.year = year;
        data.date = date;
        data.planType = planType;
    
        console.log(data);
};

const alertUser = () => alert('Please agree to terms and conditions!');

// -------------------------------------------------------------
// Adding event listeners
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const terms = document.getElementById('terms');
    
    terms.checked ? subscribeUser (): alertUser();
});