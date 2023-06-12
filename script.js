let email = prompt("emailni kiriting !")
let parol = prompt("parolni kiriting !")

if (email == "admin@gmail.com" && parol == 123) {

    console.log("Admin hush kelibsiz")

} else if (email == "maderator@gmail.com" && parol == 1234) {

    console.log("Maderator hush kelibsiz")

}else if (email == "cilent@gmail.com" && parol == 12345) {

    console.log("Cilent hush kelibsiz")

}else {

    console.log("email yoki parol xato")

}