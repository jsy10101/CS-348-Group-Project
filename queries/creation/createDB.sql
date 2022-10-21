drop database if exists cs348_gp47;

create database cs348_gp47;
\connect cs348_gp47

DROP TABLE if exists Bank_user;
DROP TABLE if exists Account;
DROP TABLE if exists Transaction;


CREATE TABLE Bank_user (
    UserID BIGINT NOT NULL,
    Username VARCHAR(30) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30),
    MobileNo BIGINT UNIQUE NOT NULL,
    EmailID VARCHAR(50) UNIQUE NOT NULL,
    Address VARCHAR(100),
    Admin BOOLEAN NOT NULL,
    DateJoined TIMESTAMP NOT NULL,
    DateUpdated TIMESTAMP NOT NULL,
    PRIMARY KEY (UserID));

CREATE TABLE Account (
    AccountID BIGINT NOT NULL,
    UserID BIGINT REFERENCES Bank_user(UserID) ON DELETE SET NULL,
    Balance REAL NOT NULL,
    Type VARCHAR(30) NOT NULL,
    DateCreated TIMESTAMP NOT NULL,
    DateUpdated TIMESTAMP NOT NULL,
    PRIMARY KEY (AccountID));

CREATE TABLE Transaction (
    TransactionID BIGINT NOT NULL,
    SenderID BIGINT REFERENCES Account(AccountID) ON DELETE SET NULL,
    ReceiverID BIGINT REFERENCES Account(AccountID) ON DELETE SET NULL,
    Amount REAL NOT NULL,
    Date TIMESTAMP NOT NULL,
    PRIMARY KEY (TransactionID));