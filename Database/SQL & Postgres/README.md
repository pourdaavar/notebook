

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

![RDBMS](./assets/dbms.png)


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


