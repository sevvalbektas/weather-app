const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

// localStorage.setItem("tokenKey", "3cd7e5693312e483d80d44666bcb1851");
localStorage.setItem("tokenKey", "Su8t+E/4HMKnjhQ2sBT+1+Oa/yedQHt4OVQGxG38wEV0tpkffpa5BcRDZa5ZWBQr");
// localStorage.setItem("tokenKeyEncrypted", EncryptStringAES ("3cd7e5693312e483d80d44666bcb1851"))

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    getWeatherDataFromApi();
});

//Get api func. (http methods == Verbs)
const getWeatherDataFromApi = async() => {
    // alert("http request is gone!");
    // const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
    const tokenKey = DecryptStringAES("Su8t+E/4HMKnjhQ2sBT+1+Oa/yedQHt4OVQGxG38wEV0tpkffpa5BcRDZa5ZWBQr");
    // alert(tokenKey);
    const inputValue = input.value;
    const units = "metric";
    const lang = "tr";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

    const response = await fetch(url).then(response=>response.json());
    console.log(response);
}