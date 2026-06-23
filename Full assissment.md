# Python Programming Assignments

## 1. Employee Bonus Calculation

A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years. Ask user for their salary and year of service and print the net bonus amount.

```python
salary = float(input("Enter your salary: "))
years_of_service = float(input("Enter your years of service: "))

bonus = 0.0

if years_of_service > 5:
    bonus = salary * 0.05

print(f"Your net bonus amount is: {bonus:.2f}")

```

---

## 2. Voting Eligibility Checker

Write a program to check whether a person is eligible for voting or not. (accept age from user) if age is greater than 17 eligible otherwise not eligible.

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible for voting.")
else:
    print("You are not eligible for voting.")

```

---

## 3. Even or Odd Number Checker

Write a program to check whether a number entered by user is even or odd.

```python
number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"{number} is Even number.")
else:
    print(f"{number} is Odd number.")

```

---

## 4. Divisibility by 7 Checker

Write a program to check whether a number is divisible by 7 or not.

```python
number = int(input("Enter a number: "))

if number % 7 == 0:
    print(f"{number} is divisible by 7.")
else:
    print(f"{number} is not divisible by 7.")

```

---

## 5. Multiple of 5 Checker

Write a program to display "Hello" if a number entered by user is a multiple of five , otherwise print "Bye".

```python
number = int(input("Enter a number: "))

if number % 5 == 0:
    print("Hello")
else:
    print("Bye")

```

---

## 6. Square or Rectangle Checker

Take values of length and breadth of a rectangle from user and print if it is square or rectangle.

```python
length = float(input("Enter the length: "))
breadth = float(input("Enter the breadth: "))

if length == breadth:
    print("It is a Square.")
else:
    print("It is a Rectangle.")

```

---

## 7. Greatest of Two Numbers

Take two int values from user and print greatest among them.

```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print("Greatest:", max(num1, num2))

```

---

## 8. Grading System

A school has following rules for grading system:

* Below 25 - F
* 25 to 45 - E
* 45 to 50 - D
* 50 to 60 - C
* 60 to 80 - B
* Above 80 - A

Ask user to enter marks and print the corresponding grade.

```python
marks = float(input("Enter your marks: "))

if marks < 25:
    grade = "F" + " looser"
elif marks <= 45:
    grade = "E"
elif marks <= 50:
    grade = "D"
elif marks <= 60:
    grade = "C"
elif marks <= 80:
    grade = "B"
else:
    grade = "A"

print(f"Your grade is: {grade}")

```

---

## 9. Place of Service Allocation

Ask user to enter age, gender ( M or F ), marital status ( Y or N ) and then using following rules print their place of service.

* If employee is female, then she will work only in urban areas.
* If employee is a male and age is in between 20 to 40 then he may work in anywhere.
* If employee is male and age is in between 40 to 60 then he will work in urban areas only.
* Any other input of age should print "ERROR".

```python
age = int(input("Enter age: "))
gender = input("Enter gender (M or F): ").upper()
marital_status = input("Enter marital status (Y or N): ").upper()

if gender == "F" and 20 <= age <= 60:
    print("Place of service: Urban areas only")
elif gender == "M" and 20 <= age < 40:
    print("Place of service: Anywhere")
elif gender == "M" and 40 <= age <= 60:
    print("Place of service: Urban areas only")
else:
    print("ERROR")

```
