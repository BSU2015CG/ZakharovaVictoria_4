Run ColorCube in chrome with options:
chrome —allow-file-access-from-files

Супер!!!! Есть баги: 1)не отслеживаете, что from сожно ввести быть больше чем to. Получается прикольно :)) 2) Нет ограничения на минимальный масштаб (как на максимальный).

//TODO осталось сделать показ информации о RGB=строке-столбце-глубине при клике (или наведении, или создать еще одну кнопку [Инфо]) на кружок

// Очень прошу сделать работу через coocies или session чтобы запоминать последнее состояние полей ввода!!!!


Есть еще рац.предложение, а что если рисовать всего в 2 раза больше "кругов": Т.е не только те, что попадают на грани, и внутренний куб (n-2)x(n-2)x(n-2) закрашивать черным, а рисовать ДВА последних слоя куба (т.е. последний и предпоследий, который почти никогда не видим кроме большого приближения или когда установить близкие from и to) и закрашивать черным оставшийся куб размера (n-4)x(n-4)x(n-4)
