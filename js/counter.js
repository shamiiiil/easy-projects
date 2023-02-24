const numbers = document.querySelectorAll(".number")

numbers.forEach(num =>{
    num.innerHTML = "0"

    const changeNumb = () =>{
        let finalNum = +(num.getAttribute("data-num"))
        let value = +(num.innerHTML)
        let step = finalNum / 10

        if(value < finalNum){
            num.innerHTML = value + step
            setTimeout(changeNumb, 100)
        } else if(value >= finalNum){
            num.innerHTML = finalNum
        }
    }
    changeNumb()
})