<?php

    $arr = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
    $NUM = Readline("Enter Num: ");

    switch($NUM){
        case 0:
            echo "Today is " . $arr[$NUM];
            break;
        case 1:
            echo "Today is "  . $arr[$NUM];
            break;
        case 2:
            echo "Today is "  . $arr[$NUM];
            break;
        case 3:
            echo "Today is "  . $arr[$NUM];
            break;
        case 4:
            echo "Today is "  . $arr[$NUM];
            break;
        case 5:
            echo "Today is "  . $arr[$NUM];
            break;
        case 6:
            echo "Today is "  . $arr[$NUM];
            break;
        default:
            echo "Invalid Input";
            break;
    }
?>