window.addEventListener("keydown", function(e){
    console.log(e);
    let char =`${e.key} `;
    console.log(char);
    let charCode = char.charCodeAt(0);
    console.log(charCode);
    document.querySelector("#main-container").classList = "container";
    document.querySelector(".inner-text").innerHTML = `You Pressed ${char}`;
    let output = document.querySelector("#getcode");
    output.classList = "input-box";
    output.innerHTML = `${charCode}`;
    document.querySelector(".text-box").style.cssText = "box-shadow : 2px 2px 7px 5px green; width: 600px; border-radius:20px;";
   
})