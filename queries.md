# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
#### I'm either doing something wrong here, and just don't know what-- or the TryIt editor is supposed to be showing 77 records!
SELECT ProductName, CategoryName
FROM Products
JOIN Categories
ON Products.CategoryID = Categories.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderID, ShipperName
FROM Orders
JOIN Shippers
ON Orders.ShipperID = Shippers.ShipperID
WHERE Orders.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT Products.ProductName, OrderDetails.Quantity
FROM OrderDetails
JOIN Products ON Products.ProductID = OrderDetails.ProductID
WHERE OrderID = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderID, CustomerName, LastName as EmployeeLastName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
#### Once again... I may just have the wrong answer here, because I'm getting back 8 records instead of 9!
SELECT CategoryName, COUNT(ProductName) as Count
FROM Categories
JOIN Products ON Categories.CategoryID = Products.CategoryID
GROUP BY Products.CategoryID;

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT OrderID, COUNT(ProductID) as ItemCount
FROM OrderDetails
GROUP BY OrderID;