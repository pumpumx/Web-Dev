<?php

    $a = Readline("Enter num 1: ");
    $b = ReadLine("Enter num 2: ");

    echo "Enter operation to be performed\n 1.) +\n2.) -\n3.) *\n4.) /\n";

    $operator = readline();

    switch($operator){
        case '+':
            echo $a + $b;
            break;
        case '-':
            echo $a - $b;
            break;
        case '*':
            echo $a * $b;
            break;
        case '/':
            echo $a / $b;
            break;
        default:
            echo "Invalid Input";
            break;
    }

?>