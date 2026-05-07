# Write your MySQL query statement below
WITH base AS (
    SELECT 
        DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS ranking,
        d.name AS Department,
        e.salary AS Salary,
        e.name AS Employee 
    FROM Employee AS e
    INNER JOIN Department AS d ON e.departmentId = d.id
)

SELECT 
    base.Department,
    base.Employee,
    base.Salary
FROM base
WHERE base.ranking < 4
