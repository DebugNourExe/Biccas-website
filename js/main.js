emailjs.init({
    publicKey: "FZX3MiXVQGhMTa8Er"
});
const emailServiceId = "default_service";
const demoTemplateId = "template_7kc4qyo";
// the menu button for mobile
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenu = document.getElementById("icon-menu");
menuButton.addEventListener("click",()=>{
    mobileMenu.classList.toggle("mobile");
    iconMenu.classList.toggle("fa-xmark");
});
// the login modal
const openLoginButton = document.getElementById("open-login");
const closeLoginButton = document.getElementById("close-login");
const loginModal = document.getElementById("login-modal");
const loginForm = document.getElementById("login-form");
const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");
const showLoginPassword = document.getElementById("show-login-passwords");
const loginMessage = document.getElementById("login-message");
const footerLoginButton = document.getElementById("footer-login");
// open login
const openLoginModel = ()=> {
    loginForm.reset();
    loginPasswordInput.type = "password";
    loginMessage.textContent = "";
    loginMessage.classList.add("hidden");
    loginMessage.classList.remove(
        "bg-red-100",
        "text-red-700",
        "bg-green-100",
        "text-green-700"
    );
    loginModal.classList.remove("hidden");
    loginModal.classList.add("flex");
 };
 openLoginButton.addEventListener("click",openLoginModel);
 footerLoginButton.addEventListener("click",openLoginModel);
 //  close login
closeLoginButton.addEventListener("click",()=> {
    loginModal.classList.add("hidden");
    loginModal.classList.remove("flex");
 });
//  show login passwords
showLoginPassword.addEventListener("change", ()=>{
    if (showLoginPassword.checked) {
        loginPasswordInput.type = "text";
    }
    else{
        loginPasswordInput.type = "password";
      
    }
});
// login Form validation and submission
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    loginMessage.textContent = "";
    loginMessage.classList.add("hidden");
    loginMessage.classList.remove(
        "bg-red-100",
        "text-red-700",
        "bg-green-100",
        "text-green-700"
    );
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value;
    if (!email || !password) {
        loginMessage.textContent = "Please fill in all fields.";
        loginMessage.classList.remove("hidden");
        loginMessage.classList.add("bg-red-100","text-red-700");
        return;
    };
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
        loginMessage.textContent = "No account found. Please sign up first.";
        loginMessage.classList.remove("hidden");
        loginMessage.classList.add("bg-red-100","text-red-700");
        return;
    };
    const user = JSON.parse(savedUser);
    if (email.toLowerCase() !== user.email.toLowerCase() || password !== user.password) {
        loginMessage.textContent = "Incorrect email or password.";
        loginMessage.classList.remove("hidden");
        loginMessage.classList.add("bg-red-100","text-red-700");
        return;
    }
    loginMessage.textContent = `Welcome back, ${user.name}!`;
    loginMessage.classList.remove("hidden");
    loginMessage.classList.add("bg-green-100","text-green-700");
    loginForm.reset();
    loginPasswordInput.type = "password";







});
// the signup modal
const openSignupButton = document.getElementById("open-signup");
const closeSignupButton = document.getElementById("close-signup");
const signupModal = document.getElementById("signup-modal");
const signupForm = document.getElementById("signup-form");
const signupNameInput = document.getElementById("signup-name");
const signupEmailInput = document.getElementById("signup-email");
const signupPasswordInput = document.getElementById("signup-password");
const signupConfirmPasswordInput = document.getElementById("signup-confirm-password");
const showSignupPasswords = document.getElementById("show-signup-passwords");
const signupMessage = document.getElementById("signup-message");
const getStartedButton = document.getElementById("get-started");
const footerFreeTrialButton = document.getElementById("footer-free-trial");
const footerSignupButton = document.getElementById("footer-signup");
// open signup
const openSignupModal = ()=> {
    signupForm.reset();
    signupPasswordInput.type = "password";
    signupConfirmPasswordInput.type = "password";
    signupMessage.textContent = "";
    signupMessage.classList.add("hidden");
    signupMessage.classList.remove(
        "bg-red-100",
        "text-red-700",
        "bg-green-100",
        "text-green-700"
    );
    signupModal.classList.remove("hidden");
    signupModal.classList.add("flex");
 };
 openSignupButton.addEventListener("click", openSignupModal);
 getStartedButton.addEventListener("click", openSignupModal);
 footerFreeTrialButton.addEventListener("click",openSignupModal);
 footerSignupButton.addEventListener("click",openSignupModal);
//  close signup
closeSignupButton.addEventListener("click",()=> {
    signupModal.classList.add("hidden");
    signupModal.classList.remove("flex");
 });
//  show signup passwords
showSignupPasswords.addEventListener("change", ()=>{
    if (showSignupPasswords.checked) {
        signupPasswordInput.type = "text";
        signupConfirmPasswordInput.type = "text";
    }
    else{
        signupPasswordInput.type = "password";
        signupConfirmPasswordInput.type = "password";
    }
});
// signup Form validation and submission
signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    signupMessage.textContent = "";
    signupMessage.classList.add("hidden");
    signupMessage.classList.remove("bg-red-100","text-red-700","bg-green-100","text-green-700");
    const name = signupNameInput.value.trim();
    const email = signupEmailInput.value.trim();
    const password = signupPasswordInput.value;
    const confirmPassword = signupConfirmPasswordInput.value;
    if (!name || !email || !password || !confirmPassword) {
        signupMessage.textContent = "Please fill in all fields.";
        signupMessage.classList.remove("hidden");
        signupMessage.classList.add("bg-red-100","text-red-700");
        return;
    }
    if(!email.includes("@") || !email.includes(".")){ {
        signupMessage.textContent = "Please enter a valid email address.";
        signupMessage.classList.remove("hidden");
        signupMessage.classList.add("bg-red-100","text-red-700");
        return;
        
    }};
    if (password.length < 8) {
        signupMessage.textContent = "Password must be at least 8 characters.";
        signupMessage.classList.remove("hidden");
        signupMessage.classList.add("bg-red-100","text-red-700");
        return;
    }
    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match.";
        signupMessage.classList.remove("hidden");
        signupMessage.classList.add("bg-red-100","text-red-700");
        return;
    }
    const user = {
        name,
        email,
        password,
        plan: selectedPlan,
        billing: selectedBilling,
        price: selectedPrice
    };
    localStorage.setItem("user", JSON.stringify(user));
    signupMessage.textContent = "Account created successfully. You can now log in";
    signupMessage.classList.remove("hidden");
    signupMessage.classList.add("bg-green-100","text-green-700");
    signupForm.reset();
 });
// the demo modal
const openDemoButton = document.getElementById("open-demo");
const closeDemoButton = document.getElementById("close-demo");
const demoModal = document.getElementById("demo-modal");
const demoVideo = document.getElementById("demo-video");
const videoURL ="https://www.youtube.com/embed/ggScDvx7RjM?autoplay=1";
openDemoButton.addEventListener("click",()=> {
    demoModal.classList.remove("hidden");
    demoModal.classList.add("flex");
    demoVideo.src = videoURL;
});
closeDemoButton.addEventListener("click",()=> {
    demoModal.classList.add("hidden");
    demoModal.classList.remove("flex");
    demoVideo.src = "";
});
// the var pricing toggle
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const slider = document.getElementById("slider");
// the var pricing elements
const freePrice = document.getElementById("free-price");
const freePeriod = document.getElementById("free-period");
const proPrice = document.getElementById("pro-price");
const proPeriod = document.getElementById("pro-period");
const businessPrice = document.getElementById("business-price");
const businessPeriod = document.getElementById("business-period");
const freeSaving = document.getElementById("free-saving");
const proSaving = document.getElementById("pro-saving");
const businessSaving = document.getElementById("business-saving");
// the var plan selection
const freePlanButton = document.getElementById("select-free-plan");
const proPlanButton = document.getElementById("select-pro-plan");
const businessPlanButton = document.getElementById("select-business-plan");
const selectedPlanSummary = document.getElementById("selected-plan-summary");
let selectedPlan = "Free";
let selectedBilling = "monthly";
let selectedPrice = "0";
// the plan monthly
monthly.addEventListener("click",()=>{
    selectedBilling = "monthly";
    slider.style.transform = "translateX(0)";
    monthly.classList.remove("text-co-950");
    monthly.classList.add("text-co-50");
    yearly.classList.remove("text-co-50");
    yearly.classList.add("text-co-950");
    freePrice.textContent = "0";
    freePeriod.textContent = "/month";
    freeSaving.textContent = "Free forever";
    proPrice.textContent = "8";
    proPeriod.textContent = "/month";
    proSaving.textContent = "Billed monthly";
    businessPrice.textContent = "16";
    businessPeriod.textContent = "/month";
    businessSaving.textContent = "Billed monthly";
    
});
// the plan yearly
yearly.addEventListener("click",()=>{
    selectedBilling = "yearly";
    slider.style.transform = "translateX(9rem)";
    yearly.classList.remove("text-co-950");
    yearly.classList.add("text-co-50");
    monthly.classList.remove("text-co-50");
    monthly.classList.add("text-co-950");
    freePrice.textContent = "0";
    freePeriod.textContent = "/year";
    freeSaving.textContent = "Free forever";
    proPrice.textContent = "80";
    proPeriod.textContent = "year";
    proSaving.textContent = "Save $16 a year";
    businessPrice.textContent = "160";
    businessPeriod.textContent = "/year";
    businessSaving.textContent = "Save $32 a year";

});
// the plan selection
const choosePlan = (planName) => {
    selectedPlan = planName;
    if (selectedPlan === "Free") {
        selectedPrice = "0";
    } 
    else if (selectedPlan === "Pro") {
        if (selectedBilling === "monthly") {
            selectedPrice = "8";
        } 
        else {
            selectedPrice = "80";
        }
    } 
    else if (selectedPlan === "Business") {
        if (selectedBilling === "monthly") {
            selectedPrice = "16";
        } 
        else {
            selectedPrice = "160";
        }
    }
    let period = "month";
    if (selectedBilling === "yearly") {
        period = "year";
    }
    selectedPlanSummary.textContent =
        `Selected plan: ${selectedPlan} — $${selectedPrice}/${period}`;
    openSignupModal();
};
freePlanButton.addEventListener("click",()=> { 
    choosePlan("Free");
});
proPlanButton.addEventListener("click",()=> {
    choosePlan("Pro");
});
businessPlanButton.addEventListener("click",()=> { 
    choosePlan("Business");
});
// Testimonial avatars rotation
const testimonialAvatars = document.getElementById(
    "testimonial-avatars"
);
const rotateTestimonialAvatarsButton = document.getElementById(
    "rotate-testimonial-avatars"
);
rotateTestimonialAvatarsButton.addEventListener("click", () => {
    const firstAvatar = testimonialAvatars.firstElementChild;
    testimonialAvatars.append(firstAvatar);
});
// Request Demo form
const demoForm = document.getElementById("demo-form");
const demoEmailInput = document.getElementById("demo-email");
const demoMessageInput = document.getElementById("demo-message");
const demoSubmitButton = document.getElementById("demo-submit");
const demoStatus = document.getElementById("demo-status");
demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    demoStatus.textContent = "";
    demoStatus.classList.add("hidden");
    demoStatus.classList.remove(
        "bg-red-100",
        "text-red-700",
        "bg-green-100",
        "text-green-700"
    );
    const email = demoEmailInput.value.trim();
    const message = demoMessageInput.value.trim();
    if (!email || !message) {
        demoStatus.textContent = "Please fill in all fields.";
        demoStatus.classList.remove("hidden");
        demoStatus.classList.add("bg-red-100", "text-red-700");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        demoStatus.textContent = "Please enter a valid email address.";
        demoStatus.classList.remove("hidden");
        demoStatus.classList.add("bg-red-100", "text-red-700");
        return;
    }
    if (message.length < 10) {
        demoStatus.textContent ="Message must be at least 10 characters.";
        demoStatus.classList.remove("hidden");
        demoStatus.classList.add("bg-red-100", "text-red-700");
        return;
    }
    demoSubmitButton.disabled = true;
    demoSubmitButton.textContent = "Sending...";
    emailjs.sendForm(emailServiceId,demoTemplateId, demoForm).then(() => {
        demoStatus.textContent =
            "Your demo request was sent successfully.";
        demoStatus.classList.remove("hidden");
        demoStatus.classList.add("bg-green-100", "text-green-700");
        demoForm.reset();
        setTimeout(() => {
            demoStatus.textContent = "";
            demoStatus.classList.add("hidden");
            demoStatus.classList.remove("bg-green-100", "text-green-700");
        }, 5000);
    }).catch((error) => {
    demoStatus.textContent =
        "We could not send your request. Please try again.";
    demoStatus.classList.remove("hidden");
    demoStatus.classList.add("bg-red-100", "text-red-700");
    console.error("EmailJS error:", error);
    }).finally(() => {
    demoSubmitButton.disabled = false;
    demoSubmitButton.textContent = "Request Demo";
    });

});
const footerTrialForm =document.getElementById("footer-trial-form");
const footerTrialEmailInput =document.getElementById("footer-trial-email");
const footerTrialStatus =document.getElementById("footer-trial-status");
footerTrialForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    footerTrialStatus.textContent = "";
    footerTrialStatus.classList.add("hidden");
    const email = footerTrialEmailInput.value.trim();
    if (!email) {
        footerTrialStatus.textContent ="Please enter your email.";
        footerTrialStatus.classList.remove("hidden");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        footerTrialStatus.textContent ="Please enter a valid email.";
        footerTrialStatus.classList.remove("hidden");
        return;
    };
    openSignupModal();
    signupEmailInput.value = email;
    footerTrialForm.reset();
});
// the current year
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();


