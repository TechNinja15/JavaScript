# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/vitejs-vite-bfmdmkmr?file=index.html)

# Solution Code

## Project 1

```javascript
const randomButton = document.getElementById("randomColor")
const colorPicker = document.getElementById("colorPicker")
const colorCode = document.getElementById("colorCode")



function changeBackgroundColor(color){
    document.body.style.backgroundColor = color
    colorCode.textContent = color;
}

randomButton.addEventListener("click", ()=>{
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    changeBackgroundColor(randomColor)
    console.log(randomColor);
    
});

colorPicker.addEventListener('input', (e)=>{
    // console.log(e.target.value);
    changeBackgroundColor(e.target.value)
})

changeBackgroundColor('#b92f1f')

```