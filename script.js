// Function to change mode

let mode_div = document.querySelector(".mode-change");
let mode = document.querySelector("#mode");


function setMode(mode) {
    localStorage.setItem('mode', mode);
  }
  
  // Function to retrieve the mode from localStorage
  function getMode() {
    return localStorage.getItem('mode');
  }
  
  // Function to apply mode based on stored mode
  function applyMode() {
    let storedMode = getMode();
    console.log(storedMode)
    if (storedMode === 'dark' || storedMode === 'null' ) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }
  
  // Function to enable dark mode
  function enableDarkMode() {
    mode.classList.remove("bx-moon");
    mode.classList.add("bx-sun");
    document.documentElement.style.setProperty('--background-color', '#000');
    document.documentElement.style.setProperty('--font-color', '#fff');

    setMode('dark'); // Store the mode
  }
  
  // Function to enable light mode
  function enableLightMode() {
    mode.classList.remove("bx-sun");
    mode.classList.add("bx-moon");
    document.documentElement.style.setProperty('--background-color', '#fff');
    document.documentElement.style.setProperty('--font-color', '#000');

    setMode('light'); // Store the mode
  }
  
  // Event listener for mode changer
  mode_div.addEventListener('click', function () {
    if (mode.classList.contains("bx-moon")) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  });
  
  // Apply mode on page load
  applyMode();


//**********************************************************************************************************************

// main functions for calculation
let calci_input_string = ""
let calculator_display = document.querySelector('.calci-input')
let button_list = document.querySelectorAll(".button")
console.log(button_list)

button_list.forEach((button) => {
    button.addEventListener('click', (e) => {
        let button_value = e.target.innerHTML

        if(button_value == '=') 
        {
            // Replace '×' with '*' and '÷' with '/' for evaluation
            let replaced_calci_input_string = calci_input_string.replace(/×/g, '*').replace(/÷/g, '/')
           
            try 
            {   let result = eval(replaced_calci_input_string)
                if(result - Math.floor(result) == 0)
                    calculator_display.value = result
                else
                    calculator_display.value = result.toFixed(3)
                calci_input_string = calculator_display.value // Update the input string with the result
            } 
            catch (error) 
            {
                calculator_display.value = "Error"
                calci_input_string = ""
            }
        } 
        else if(button_value == 'AC') 
        {
            calci_input_string = ""
            calculator_display.value = ""
        } 
        else if(e.target.classList.contains('backspace')) 
        {
            // Handle backspace button
            calci_input_string = calci_input_string.slice(0, -1)
            calculator_display.value = calci_input_string
        } 
        else if(button_value == '×' || button_value == '÷') 
        {
            calci_input_string += button_value
            calculator_display.value = calci_input_string
        } 
        else 
        {
            calci_input_string += button_value
            calculator_display.value = calci_input_string
        }
    })
})