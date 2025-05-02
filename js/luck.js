const phoneNumber = document.querySelector(".phone-number")

const numbers = [
    "+998 97 198 08 36",
    "+998 90 909 11 17",
    "+998 99 971 62 22",
    "+998 91 788 09 18",
    "+998 98 073 33 33",
    "+998 33 166 83 33",
    "+998 90 813 64 03",
    "+998 95 051 52 40",
    "+998 95 051 48 44",
    "+998 94 121 01 43",
    "+998 99 383 04 17",
    "+998 94 921 83 86",
    "+998 99 821 32 72"
]

function randomPhoneNumber() {
    const interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * numbers.length)
        phoneNumber.innerHTML = numbers[randomNumber]
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
    }, 2500)
}
