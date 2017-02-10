are in the wrong order. this is repeated until no swaps are needed. simple but slow and impractical.

Best Case Scenario - O(n)
Average Case Scenario - O(n^2^)
Worst Case Scenario - O(n^2^)

## Psuedo code
```
function bubbleSort(list)
    do
        swapped = false
        for(i=0; list.length; i++)
            if list[i] > list[i+1]
                swap
                swapped=true
            end if
        end for
    while
    return list
```
