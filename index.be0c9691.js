var e=document.querySelectorAll(".population"),t=0;e.forEach(function(e){var o=parseFloat(e.innerText.replace(/,/g,""));isNaN(o)||(t+=o)});var o=t/e.length;document.querySelector(".total-population").innerText=t.toLocaleString(),document.querySelector(".average-population").innerText=o.toLocaleString(void 0,{maximumFractionDigits:0});
//# sourceMappingURL=index.be0c9691.js.map
