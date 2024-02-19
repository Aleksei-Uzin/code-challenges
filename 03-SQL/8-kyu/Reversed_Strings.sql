-- Reversed Strings
-- https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/sql

-- # write your SQL statement here:
-- you are given a table 'solution' with column 'str',
-- return a table with column 'str' and your result in a column named 'res'.
SELECT str, REVERSE(str) AS res FROM solution;
