<?php
    $arr = [[10,12,3] , [1,4,2],[10,15,11]];
    $index;
    $max=-1;
    $arr1=[];
    $k=0;
    for($i=0;$i<count($arr);$i++){
        for($j=0;$j<count($arr[0]);$j++){
            $arr1[$k++] = $arr[$i][$j];
        }
    }
    for($i=0;$i<count($arr1);$i++){
        for($j=$i;$j<count($arr1);$j++){
           if($arr1[$i]>=$arr1[$j]){
            $temp = $arr1[$i];
            $arr1[$i] = $arr1[$j];
            $arr1[$j] = $temp;
           }
        }
    }
    foreach($arr1 as $i){
        echo $i." "; 
    }
    print("\n");
    // echo $k;
    $k=0;
    for($i=0;$i<count($arr);$i++){
        for($j=0;$j<count($arr[0]);$j++){
            $arr[$i][$j] = $arr1[$k++];
        }
    }
    for($i=0;$i<count($arr);$i++){
        for($j=0;$j<count($arr[0]);$j++){
            echo $arr[$i][$j]." "; 
        }
        echo "\n";
    }
?>