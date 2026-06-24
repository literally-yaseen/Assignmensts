
 Python Loops and Lists Questions

### 1. Write a program that print the numbers from 1 to 10 using loop

```python
for i in range(1, 11):
    print(i)

```

---

### 2. Write a program to print even numbers from 1 to 10.

```python
for i in range(2, 11, 2):
    print(i)

```

---

### 3. Write a program that prints 'Happy Birthday!' five times on screen.

```python
for i in range(5):
    print("Happy Birthday!")

```

---

### 4. Write a program that takes a number n as input from the user and generates the first n terms of the series formed by squaring the natural numbers.

**Sample Output:**

```text
Enter a number: 6
The first 6 terms of the series are:
1 4 9 16 25 36

```

```python
n = int(input("Enter a number: "))

print(f"The first {n} terms of the series are:")

for i in range(1, n + 1):
    print(i**2, end=" ")

```

---

### 5. Write a program that prompts the user to input a number and prints its multiplication table.

```python
num = int(input("Enter a number: "))

print(f"Multiplication Table for {num}:")

for i in range(1, 11):
    product = num * i
    print(f"{num} x {i} = {product}")

```

---

### 6. Write a program that prompts the user to enter a number n, and then prints all the odd numbers between 1 and n.

```python
n = int(input("Enter a number (n): "))

print(f"The odd numbers between 1 and {n} are:")

for i in range(1, n + 1, 2):
    print(i, end=" ")

```

---

### 7. Write a Python program to print the numbers from 20 to 1 using a while loop.

```python
i = 20

while i >= 1:
    print(i, end=" ")
    i = i - 1  

```

---

### 8. Write a program that prompts the user to enter a number n and prints all the numbers from 1 to n.

```python
n = int(input("Enter a number (n): "))

print(f"Numbers from 1 to {n} are:")

for i in range(1, n + 1):
    print(i, end=" ")

```

---

### 9. Write a program that prompts the user to enter a number and repeats this process 5 times. The program should accumulate the numbers entered and then display the final running total.

**Sample Output:**

```text
Enter a number: 10
Enter a number: 15
Enter a number: 35
Enter a number: 40
Enter a number: 50
The final running total is: 150

```

```python
running_total = 0

for i in range(5):
    num = int(input("Enter a number: "))
    running_total = running_total + num  

print(f"The final running total is: {running_total}")

```

---

### 10. Write a Python program that:

1. Creates a list named `clean_countries` containing the following countries: `["Bangladesh", "India", "Pakistan", "China"]`
2. Repeatedly asks the user to enter a country name.
3. Checks whether the entered country exists in the `clean_countries` list.
4. If the country is found in the list: Display the message `<country_name> is in clean countries list` and stop the program.
5. If the country is not found, keep asking the user to enter another country.

```python
clean_countries = ["Bangladesh", "India", "Pakistan", "China"]

while True:
    user_input = input("Enter a country name: ")
    if user_input in clean_countries:
        print(f"{user_input} is in clean countries list")
        break 
    else:
        print("Country not found. Please try again.\n")

```

```

```
