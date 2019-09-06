process.env.NODE_ENV = 'test';
var request = require("supertest");
var app = require("../index.js");
describe("GET /", function() {
 it("respond with hello my world", function(done) {
 //navigate to root and check the the response is "hello world" normally
 request(app).get("/").expect("hello my world", done);
 });
});