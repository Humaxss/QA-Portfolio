
-- Verify customer with CustomerId = 10 exists
SELECT *
 FROM customers
 WHERE CustomerId = 10;

-- Verify albums with AlbumId = 17 exists
 SELECT *
 FROM albums
 WHERE AlbumId = 17;

-- Verify invoices created by CustomerId = 3 exists
 SELECT *
 FROM invoices
WHERE CustomerId = 3;

-- Verify customers from Brazil
 SELECT *
 FROM customers
WHERE Country = "Brazil";

-- Verify invoices with total greater than 10.
 SELECT *
 FROM invoices
 WHERE total > 10;