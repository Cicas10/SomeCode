# Serch algorithm in an ordered list
def binary_search(list, n, x):
    '''Binary serch.'''
    i = 0
    j = n - 1
    while (i <= j):
        middle = int((i + j) / 2)
        if (x < list[middle]):
            j = middle - 1
        elif (x > list[middle]):
            i = middle + 1
        else:
            return middle
    return -1


# MAIN.

l = [3, 4, 5, 13, 20, 21, 30, 33, 34, 35]  # Example List

i = binary_search(l, 10, int(input("Insert number to search in the list: ")))

if (i >= 0):
    print("\nElement found in position %s\n" % i)
else:
    print("Element not found!")

input("Press Enter to continue...")
