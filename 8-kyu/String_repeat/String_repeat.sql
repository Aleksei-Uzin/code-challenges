--# write your SQL statement here:
-- you are given a table 'repeatstr' with columns 'n' and 's',
-- return a table with all columns and your result in a column named 'res'.
SELECT s, n, REPEAT(s, n) AS res FROM repeatstr;
