-- Verify the total number of customers as TotalCustomers
 SELECT COUNT(*) as TotalCustomers
 FROM customers;

-- Verify the number of invoices created by CustomerId = 3
 SELECT COUNT(*) as TotalInvoices
 FROM invoices
 WHERE CustomerId = 3;

-- Verify the number of customers from Brazil
 SELECT COUNT(*) as BrazilCustomers
 FROM customers
 WHERE Country = "Brazil";

-- Verify the average track price
 SELECT AVG(UnitPrice) AS Averagetrackprice
FROM tracks;

-- Verify the average track duration
 SELECT AVG(Milliseconds) AS Averagetrackduration
 FROM tracks;

-- Verify the highest tack price
 SELECT MAX(UnitPrice) AS Highesttrackprice
 FROM tracks;

-- Verify the longest track duration
 SELECT MAX(Milliseconds) AS Longesttrack
 FROM tracks;

-- Verify the lowest track price
 SELECT MIN(UnitPrice) AS Lowestunitprice
 FROM tracks;

-- Verify the shortest track duration
 SELECT MIN(Milliseconds) AS Shortesttrack
 FROM tracks;

-- Verify the minimum, maximum and average track duration
 SELECT
 		MIN(Milliseconds) AS Shortesttrack,
		MAX(Milliseconds) AS Longesttrack,
		AVG(Milliseconds) AS Averagetrack
 FROM tracks;