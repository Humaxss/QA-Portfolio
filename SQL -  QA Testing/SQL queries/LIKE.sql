-- Verify customers whose LastName ends with "son"
 SELECT *
 FROM customers
 WHERE LastName LIKE "%son";

-- Verify artists whose name stars with "A"
 SELECT *
 FROM artists
 WHERE name LIKE "A%";

-- Verify tracks whose name starts with "Love"
 SELECT *
 FROM tracks
 WHERE name LIKE "Love%";

-- Verify customers whose phone number starts with "+1"
 SELECT *
 FROM customers
 WHERE Phone LIKE "+1%";