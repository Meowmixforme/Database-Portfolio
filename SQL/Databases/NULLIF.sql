-- Compute ratio of department A members to department B members
-- Uses conditional aggregation and NULLIF to avoid division by zero

SELECT
  SUM(CASE WHEN department = 'A' THEN 1 ELSE 0 END) /
  NULLIF(SUM(CASE WHEN department = 'B' THEN 1 ELSE 0 END), 0) AS departments_ratio
FROM departments;