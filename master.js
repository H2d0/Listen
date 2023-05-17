// Start sidebar
let list = document.querySelectorAll(".sidebar li a");
let span = document.querySelectorAll(".sidebar li span")
let last= document.querySelector(".last");
span.forEach(e => {
    e.addEventListener("click", (e) => {
        list.forEach(e => {
            if (e.classList.contains("active")) {
                e.classList.remove("active")
            }
            
        })
        e.target.parentElement.classList.add("active");
    })
})
// End sidebar
// Start head
let listHead = document.querySelectorAll(".links-head span");
        // console.log(listHead)
listHead.forEach(e => {
    e.addEventListener("click", (e) => {
        //  console.log(e.target)
        listHead.forEach(e => {
            if (e.classList.contains("chcker")) {
                e.classList.remove("chcker")
            }
        })
        e.target.classList.add("chcker");
    })
})
// End head
last.textContent = "© 2023 Listen AB";



// Create Popup With The Image
let ourBox = document.querySelectorAll(".images img");
let plays = document.querySelectorAll(".play");

plays.forEach(play => {
    play.addEventListener('click', (e) => {
        let overlay = document.createElement("div");
    // Add Class To Overlay
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body
        document.body.appendChild(overlay);
    // Create The Popup Box
    let popupBox = document.createElement("div");
    // Add Class To The Popup Box
        popupBox.className = 'popup-box';
        let popupImage = document.createElement("div");
        popupImage.classList.add("new-box")
    // Set Image Source
        popupImage.innerHTML = `<div class="box">
                            <div class="images">
                                <img src="${e.target.parentElement.querySelector(".images img").src}" alt="">
                                <i class="fa-brands fa-napster"></i>
                            </div>
                        </div>`;
        let popupsign = document.createElement("div");
        popupsign.classList.add("sign-box")
    // Set Image Source
        popupsign.innerHTML = `
        <h3>Start listening with a free Listen account</h3>
        <div>
        <a href="Sign.html"><span>Sign up free</span></a>
        <span>Download app</span>
        <div>
        <p>Already have an account? <a href="Login.html">Login</a> </p>
        </div>
        </div>
                            `;
     // Add Image To Popup Box
        let Close = document.createElement("span");
        Close.innerHTML = `
            <i class="fa-solid fa-xmark Close"></i>
        `;
        Close.onclick = function (e) {
            document.querySelector(".popup-box").remove();
            document.querySelector(".popup-overlay").remove();
        }
        overlay.onclick = function (e) {
            document.querySelector(".popup-box").remove();
            document.querySelector(".popup-overlay").remove();
        }
    popupBox.appendChild(popupImage);                       
    popupBox.appendChild(Close);                       
        popupBox.appendChild(popupsign); 
        // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    })
})
let home = document.querySelector(".home");
let createLink = document.querySelector(".creat a");
let loginLink = document.querySelector(".log");
let popup = document.querySelector(".popup");
let not = document.querySelector(".not");

createLink.addEventListener("click", (e) => {
    e.preventDefault();
    let overlay = document.createElement("div");
    // Add Class To Overlay
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body
    document.body.appendChild(overlay);
    overlay.onclick = function () {
        popup.style.display = "none";
        document.querySelector(".popup-overlay").remove()
        createLink.classList.remove("active");
        home.classList.add("active");
    }
    not.onclick = function () {
        popup.style.display = "none";
        document.querySelector(".popup-overlay").remove()
        home.classList.add("active");
    }
    createLink.parentElement.classList.add("active");
    popup.style.display = "block";
});

createLink.parentElement.addEventListener("click", (e) => {
    if (!createLink.classList.contains("active")) {
        popup.style.display = "none";
}
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginLink.classList.add("active");
    popup.style.display = "block";
    window.open("Login.html","_self")
});

let libraryLink = document.querySelector(".creat a");

libraryLink.addEventListener("click", (e) => {
    if (!libraryLink.classList.contains("active")) {
        popup.style.display = "none";
}
});
let createLink2 = document.querySelector(".creat2 a");
let popup2 = document.querySelector(".popup2");
let loginLink2 = document.querySelector(".log2");
let not2 = document.querySelector(".not2");

createLink2.addEventListener("click", (e) => {
    e.preventDefault();
    let overlay = document.createElement("div");
    // Add Class To Overlay
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body
    document.body.appendChild(overlay);
    overlay.onclick = function () {
        popup2.style.display = "none";
        document.querySelector(".popup-overlay").remove()
        createLink2.classList.remove("active");
        home.classList.add("active");
    }
    not2.onclick = function () {
        popup2.style.display = "none";
        document.querySelector(".popup-overlay").remove()
        home.classList.add("active");
    }
    createLink2.parentElement.classList.add("active");
    popup2.style.display = "block";
});

createLink2.parentElement.addEventListener("click", (e) => {
    if (!createLink2.classList.contains("active")) {
        popup2.style.display = "none";
}
});

loginLink2.addEventListener("click", (e) => {
    e.preventDefault();
    loginLink2.classList.add("active");
    popup2.style.display = "block";
    window.open("Login.html","_self")
});

let libraryLink2 = document.querySelector(".creat2 a");

libraryLink2.addEventListener("click", (e) => {
    if (!libraryLink2.classList.contains("active")) {
        popup2.style.display = "none";
}
});
let createLink3 = document.querySelector(".creat3 a");
let popup3 = document.querySelector(".popup3");
let loginLink3 = document.querySelector(".log3");
let not3 = document.querySelector(".not3");

createLink3.addEventListener("click", (e) => {
    e.preventDefault();
    let overlay = document.createElement("div");
    // Add Class To Overlay
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body
    document.body.appendChild(overlay);
    overlay.onclick = function () {
        popup3.style.display = "none";
        document.querySelector(".popup-overlay").remove()
        createLink3.classList.remove("active");
        home.classList.add("active");
    }
    not3.onclick = function () {
        popup3.style.display = "none";
        document.querySelector(".popup-overlay").remove()
        home.classList.add("active");
    }
    createLink3.parentElement.classList.add("active");
    popup3.style.display = "block";
});

createLink3.parentElement.addEventListener("click", (e) => {
    if (!createLink3.classList.contains("active")) {
        popup3.style.display = "none";
}
});

loginLink3.addEventListener("click", (e) => {
    e.preventDefault();
    loginLink3.classList.add("active");
    popup3.style.display = "block";
    window.open("Login.html","_self")
});


let libraryLink3 = document.querySelector(".creat3 a");

libraryLink3.addEventListener("click", (e) => {
    if (!libraryLink3.classList.contains("active")) {
        popup3.style.display = "none";
}
});


let search = document.querySelector(".search");
let navs = document.querySelector(".navs");
console.log(search.classList.contains("active"))
search.addEventListener("click", () => {
    search.classList.add("active");
    if (!search.classList.contains("active")) {
        navs.classList.add("foucs")
    }
})

// Start Sign up
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const termsCheckbox = document.querySelector('#terms');
const submitBtn = document.querySelector('#submit-btn');

 form.addEventListener('submit', (e) => {
   e.preventDefault();
   const email = emailInput.value.trim();
   const password = passwordInput.value.trim();
   const confirmPassword = confirmPasswordInput.value.trim();
   if (email === '' || password === '' || confirmPassword === '') {
     alert('Please fill in all fields');
   } else if (password !== confirmPassword) {
     alert('Passwords do not match');
   } else if (!termsCheckbox.checked) {
     alert('Please agree to the Terms of Service and Privacy Policy');
   } else {
     // Send form data to server or perform other actions
     alert('Sign up successful!');
     form.reset();
   }
 });
// End Sign up






