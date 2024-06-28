const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
const User = require("../models/User");

describe("User API Endpoints", () => {
  beforeAll(async () => {
    // Connect to a test database before running tests
    await mongoose.connect("mongodb://localhost:27017/testDatabase", {});
  });

  afterAll(async () => {
    // Drop the test database and close the connection after tests
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear the users collection before each test
    await User.deleteMany({});
  });

  // Test for GET all users
  test("GET /users - Success", async () => {
    // Seed the database with a user
    await User.create({
      firstName: "John",
      lastName: "Doe",
      companyName: "Test Company",
      age: 30,
      city: "Test City",
      state: "Test State",
      zip: "12345",
      email: "john.doe@example.com",
      web: "http://www.example.com",
    });

    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.users.length).toBe(1);
    expect(response.body.msg).toEqual("Users successfully fetched");
  });

  // Test for GET a user by ID
  test("GET /users/:id - Success", async () => {
    const user = await User.create({
      firstName: "Jane",
      lastName: "Doe",
      companyName: "Test Company",
      age: 25,
      city: "Test City",
      state: "Test State",
      zip: "54321",
      email: "jane.doe@example.com",
      web: "http://www.example.com",
    });

    const response = await request(app).get(`/users/${user._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.user).toBeTruthy();
    expect(response.body.msg).toEqual(
      "User with given id fetched successfully"
    );
  });

  // Test for POST create a new user
  test("POST /users - Success", async () => {
    const newUser = {
      firstName: "Alice",
      lastName: "Smith",
      companyName: "Another Test Company",
      age: 28,
      city: "Another Test City",
      state: "Another Test State",
      zip: "67890",
      email: "alice.smith@example.com",
      web: "http://www.anotherexample.com",
    };

    const response = await request(app).post("/users").send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body.user).toBeTruthy();
    expect(response.body.msg).toEqual("User successfully created");
  });

  // Test for PUT update an existing user
  test("PATCH /users/:id - Success", async () => {
    const user = await User.create({
      firstName: "Bob",
      lastName: "Brown",
      companyName: "Yet Another Test Company",
      age: 32,
      city: "Yet Another Test City",
      state: "Yet Another Test State",
      zip: "98765",
      email: "bob.brown@example.com",
      web: "http://www.yetanotherexample.com",
    });

    const updatedUser = {
      companyName: "Updated Test Company",
    };

    const response = await request(app)
      .patch(`/users/${user._id}`)
      .send(updatedUser);
    expect(response.statusCode).toBe(200);
    expect(response.body.user.companyName).toEqual("Updated Test Company");
    expect(response.body.msg).toEqual("User successfully updated");
  });

  // Test for DELETE a user
  test("DELETE /users/:id - Success", async () => {
    const user = await User.create({
      firstName: "Charlie",
      lastName: "Green",
      companyName: "Delete Test Company",
      age: 35,
      city: "Delete Test City",
      state: "Delete Test State",
      zip: "11223",
      email: "charlie.green@example.com",
      web: "http://www.deletetest.com",
    });

    const response = await request(app).delete(`/users/${user._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("User successfully deleted");
  });
});
