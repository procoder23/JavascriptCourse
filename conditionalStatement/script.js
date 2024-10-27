const entrAge = document.getElementById("entrAge");
const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.onclick = function() {
    if(entrAge.value < 18) {
        res.textContent = `${entrAge.value} :You are not eligible`;
    }else{
        res.textContent = `${entrAge.value} :You are eligible`;
    }
};

