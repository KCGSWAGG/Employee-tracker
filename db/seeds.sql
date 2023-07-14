INSERT INTO departments (id, department_name)
VALUES (1, 'software engineer'),
        (2, 'lawyer'),
        (3, 'lead engineer'),
        (4, 'sales lead'),
        (5, 'account manager'),
        (6, 'salesperson');

INSERT INTO roles (id, title, department_id, salary)
VALUES (1, 'software engineer', 'engineering', 120000),
        (2, 'lawyer', 'legal', 150000),
        (3, 'lead engineer', 'engineering', 150000)
        (4, 'sales lead', 'sales', 100000),
        (5, 'account manager', 'finance', 167000),
        (6, 'salesperson', 'sales', 8000)

INSERT INTO employees (id, first_name, last_name, job_title, role_id, salaries)
VALUES (1, 'Tyreal', 'Worley', 'lead engineer', 3, 150000)
        (2, 'Kobe', 'Bryant', 'account manager', 5, 167000)
        (3, 'J', 'Cole', 'software engineer', 1, 120000)
        (4, 'Steph', 'Curry', 'sales lead', 4, 100000)
        (5, 'Allen', 'Iverson', 'lawyer', 2, 150000)
        (6, 'Tank', 'Davis', 'salesperson', 6, 80000)