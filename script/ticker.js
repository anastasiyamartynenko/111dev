

let socialFloat = document.querySelector('.bottom-sticky-app');
let footer = document.querySelector('.footer');

function checkOffset() {
    function getRectTop(el) {
        var rect = el.getBoundingClientRect();
        return rect.top;
    }

    if ((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10) 
        socialFloat.style.position = 'absolute';
    if (document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)) 
        socialFloat.style.position = 'fixed'; // restore when you scroll up
        
}

document.addEventListener("scroll", function () {
    checkOffset();
});


// function getPlatform() {
//     var platform = ["Win32", "Android", "iOS"];
 
//     for (var i = 0; i < platform.length; i++) {
 
//         if (navigator.platform.indexOf(platform[i]) >- 1) {
 
//             return platform[i];
//         }
//     }
//  }
 
// const os = getPlatform();

// const setButton = os => {

//     let $btn = document.querySelector('#insert-btn');

//     switch (os) {
//         case "iOS":
//             $btn.setAttribute('href', 'https://apps.apple.com/kz/app/j%C3%BDsan/id1441936010');
//             break;
    
//         case "Android":
//             $btn.setAttribute('href', 'https://play.google.com/store/apps/details?id=kz.tsb.app24&hl=ru');
//             break;
    
//         case "Win32":
//             $btn.setAttribute('href', 'https://play.google.com/store/apps/details?id=kz.tsb.app24&hl=ru');
//             break;

//         default:
//             break;
//     }
//     console.log(os)
// }
// setButton(os);


    // const $btn = document.querySelector('#prependedcheckbox')
        // const btnClick = e => {
        //     e.preventDefault();
        // }
        // $btn.addEventListener('click', btnClick)

        const forms = document.querySelectorAll('.form-arr');

        forms.forEach((form, index) => {
        
                let setValue = () => {
                    if (checkbox.getAttribute('value') === "true") {
                        checkbox.setAttribute('value', "false")
                    } else {
                        checkbox.setAttribute('value', "true")
                    }
                }
        
                var isValidMail = false;
                var isValidCheckBox = false;
        
                let emailInput = form.querySelector('#email-validation-item')
                let btnInput = form.querySelector('#prependedcheckbox')
                let checkbox = form.querySelector("#radio");
        
                checkbox.addEventListener('change', setValue);
        
                const validateEmail = e => {
                    const regex = /\S+@\S+\.\S+/; 
                    if (regex.test(e.target.value)) {
                        isValidMail = true;
                    } else {
                        isValidMail = false;
                    }
                    if (isValidMail && isValidCheckBox) {
                        btnInput.disabled = false;
                    } else {
                        btnInput.disabled = true;
                    }
                }
                emailInput.addEventListener('change', validateEmail);
        
        
                const validator = e => {
        
                    if (e.target.value === "true") isValidCheckBox = true;
                    else isValidCheckBox = false;
                
                    if (isValidMail && isValidCheckBox) {
                        btnInput.disabled = false;
                    } else {
                        btnInput.disabled = true;
                    }
                }
        
                checkbox.addEventListener('click', validator);
        
        });
        
