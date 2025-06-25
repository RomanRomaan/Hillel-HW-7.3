/** Функція з циклом - Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . 
 * Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, 
 * текст або цикл закінчує всі ітерації, 
 * то функція виводить в консоль останній введення користувача і завершує функцію.*/

function cicleItter() {
    let userInput = prompt("Enter number > 100");

    for (let i = 0; i < 10; i++) {
        if (userInput === null) {
            console.log('You are canceled');
            return;
        } else if (isNaN(Number(userInput)) || userInput.trim() === "") {
            userInput = prompt("You entered not a number. Enter number > 100");
            continue;
        } else if (+userInput > 100) {
            break;
        } else {
            userInput = prompt("Enter number > 100");
        }
    }


    if (userInput !== null) {
        console.log(userInput);
    }
}
cicleItter();

