const copied = document.querySelector('#copied');
const paste = document.querySelector('#paste');
const copy = document.querySelector('#copy');
const btn = document.querySelector('#btn');

copy.select();
paste.value = "";
btn.addEventListener('click',()=>{
    if(document.execCommand('copy')){
        paste.focus();
        copied.style.opacity = '1';
        setTimeout(()=>{
            copied.style.opacity = '0';
        },800);
    }
    else
       alert('Invalid Operation');
});