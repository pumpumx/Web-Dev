<?php

    function setChildren($children=0){
        echo "Total number of children are: $children \n ";
    }
    setChildren(1);
    setChildren(2);
    setChildren(4);
    setChildren(3);

    function add(float $a , float $b){
        return (int)($a + $b);
    }   
        echo add(1.5,1.2);
?>