INSERT INTO departments (department_name)
VALUES ('software engineer'),
        ('lawyer'),
        ('lead engineer'),
        ('sales lead'),
        ('account manager'),
        ('salesperson');

INSERT INTO roles (title, department_id, salary)
VALUES ('software engineer', 1, 120000),
        ('lawyer', 2, 150000),
        ('lead engineer', 3, 150000),
        ('sales lead', 4, 100000),
        ('account manager', 5, 167000),
        ('salesperson', 6, 8000);

INSERT INTO employees (first_name, last_name, job_title, role_id, salaries)
VALUES ('Tyreal', 'Worley', 'lead engineer', 1, 150000),
        ('Kobe', 'Bryant', 'account manager', 2, 167000),
        ('J', 'Cole', 'software engineer', 3, 120000),
        ('Steph', 'Curry', 'sales lead', 4, 100000),
        ('Allen', 'Iverson', 'lawyer', 5, 150000),
        ('Tank', 'Davis', 'salesperson', 6, 80000);