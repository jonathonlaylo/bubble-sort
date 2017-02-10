# Bubble Sort

> aka "sinking sort"
>
> simple sorting that steps through the list, compares each pair of items, and swaps if they are in the wrong order. this is repeated until no swaps are needed. simple but slow and impractical.

Best Case Scenario - O(n)

Average Case Scenario - O(n<sup>2</sup>)

Worst Case Scenario - O(n<sup>2</sup>)

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
