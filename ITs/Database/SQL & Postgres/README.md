

## What's A database?
An organised collection of data, also database gives us a method of accessing and manipulating the data.

### Type of databases

- Flat files -> like excel
- Document model DB -> like MongoDB
- Relational Database -> like PostgreSQL - MySQL - SQLite

#### Relational Database
1. Data is stored in tables ( relations )
2. these tables can be linked to each other
3. can identify data in relation to another piece of data in db


### Owner Table
| ID  | name    | 
| --- | ------- | 
| 1   | Hossein |
|2     | Akbar  | 

### Pets Table
| ID  | name | age | owner_id |
| --- | ---- | --- | -------- |
| 1   | Brad | 15  | 2        |
| 2   | John | 1   | 1         |


MySQL, Oracle, PostgreSQL are all Relational database management systems ( RDBMS )

RDBMS allow us to interact with the database.

![RDBMS](dbms.png)


## SQL
1. stands for Structured Query Language
2. the language for talking to relational databases.
3. used to create tables, insert data retrieve and much more.
4. SQL queries are very similar across different database systems


#### Data definition language
- How to create tables in database
- How to modify tables in database
- How to delete tables from database


##### Database tables
- Tables contain columns ( fields ) and rows of data ( records ).
- Each column has a defined data type which defines what type of data can be contained within that column.
- each row of data should be unique
- each column should contain only one value per row


| id - integer | first_name - character varying ( 30 ) | last_name - character varying ( 30) | city - character varying ( 30 ) | state - character ( 2 ) |
| ------------ | ------------------------------------- | ----------------------------------- | ------------------------------- | ----------------------- |
| 1            | John                                  | Doe                                 | Boston                          | MA                      |
| 2            | Sara                                  | Smith                               | Seattle                         | WA                      |
| 3            | Alex                                  | Brown                               | NY                              | NY                      |

in relational DBs, tables can be linked to each other, two tables are linked through primary keys and foreign keys


# PostgreSQL


### Data types

#### Numeric data types

| Data type                                                                | Description                      | Exp columns      |
| ------------------------------------------------------------------------ | -------------------------------- | ---------------- |
| INT                                                                      | Whole numbers                    | Age, Quantity    |
| NUMERIC(P = max number of digit,S = number of digit after decimal point) | Decimal numbers                  | Height, Price    |
| SERIAL                                                                   | Auto incrementing - Whole number | id - primary key |
|                                                                         |                                  |                  |

#### String Data types

| Data type  | Description                              | Exp columns  |
| ---------- | ---------------------------------------- | ------------ |
| CHAR(N)    | Fixed length string of length N          | Gender,State |
| VARCHAR(N) | Varying length string of max length N    | Name, Email  |
| TEXT       | varying length string with no max length | Comments, Reviews             |
*NOTE: N refers to length

#### Time Data type
| Data type | Description         | Exp columns   |
| --------- | ------------------- | ------------- |
| TIME      | HH:MM:SS            |               |
| DATE      | YYYY-MM-DD          | Date of birth |
| TIMESTAMP | YYYY-MM-DD HH:MM:SS | Order time    |
|           |                     |               |

#### Other data types
| Data type | Description                          | Exp columns |          |
| --------- | ------------------------------------ | ----------- | -------- |
| BOOLEAN   | True or False                                | In Stock |
| ENUM      | A List of possible input by the User | Geneder            |          |



### Primary keys and Foreign Keys
#### 1. Primary keys
- a column which uniquely identifies a record in a table
- Must be unique and can not be null
- Only 1 primary key per table
- Primary keys are not mandatory but are highly advised!

#### 2. Foreign keys
- A foreign key is used to link two tables to each other.
- A foreign key is a column where the value match the values of another tables primary key column
- the table with the primary key is called reference, or parent, table and the table with foreign key is called the child table.
- A table can contain multiple foreign keys


| ID          | Name | Age | owner_id    |
| ----------- | ---- | --- | ----------- |
| primary_key |      |     | foreign_key |
|             |      |     |             |



### Constraints
- #### Unique Constraint
	1. Ensures that a column can only contain unique values. like an email or username
	2. Throws an error if duplicate values are inserted into a column.
	3. You can state whether a column should have a unique constraint when creating the table.
- #### Not null constraint
	1. Ensures that values can't be inserted into a column.
	2. if the data is vital then u can add the not null constraint
	3. define a column with the not null constraint when creating the table.
- #### Check constraints
	1. used to check whether values in a column satisfy a specific boolean expression. exp: an age column must contain `values > 0`
	2. ensures that the data entered into the database makes sense.