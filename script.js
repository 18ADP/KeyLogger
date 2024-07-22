const logDiv=document.getElementById("log");
const stateDiv=document.getElementById("state");
const startBtn=document.getElementById("start-btn");
const stopBtn=document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handelDown)
    document.addEventListener("keyup",handelup)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handelDown);
    document.removeEventListener("keyup",handelup);
    logDiv.textContent="";
    stateDiv.textContent="";
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

function handelDown(e){
    logDiv.textContent = `Key ${e.key} pressed down`
    stateDiv.textContent = "Key is down";
}
function handelup(e){
    logDiv.textContent = `Key ${e.key} pressed up`
    stateDiv.textContent = "Key is up";
}