-- Compute ratio of members in department A to those in department B
-- Uses conditional SUM to count each group, then divides the totals

SELECT
  SUM(CASE WHEN department = 'A' THEN 1 ELSE 0 END) /
  SUM(CASE WHEN department = 'B' THEN 1 ELSE 0 END) AS departments_ratio
FROM departments;