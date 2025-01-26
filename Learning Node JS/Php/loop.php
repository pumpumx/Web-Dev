<?php
    $arr = array(1,2,3,4);
    $x =0;
    for($i=0;$i<count($arr);$i++){
        $x+= $arr[$i];
    }
    echo $x."\n";

    $arr1 = [[1,2,3] , [2,23,4] , [3,4,5]];
    for($i=0;$i<count($arr1);$i++){
        for($j=0;$j<count($arr1[0]);$j++){
            echo $arr1[$i][$j]." ";
        }
        echo "\n";
    }

    
?>