# API Playbook

This playbook gives a compact, practical reference for beginners learning about APIs: what they are, how they work, common security issues, and quick testing/checklist items. 
It's designed to be easy to reference during API testing.

## What is an API?

An API (Application Programming Interface) 
is set of rules and protocols that lets two software/application systems communicate with each other. 

For web APIs, clients send HTTP requests to endpoints exposed by a server, which responds with structured data (usually JSON).

Key terms: **endpoint**, **method (GET/POST/PUT/DELETE)**, **status code**, **headers**, **payload/body**.

### Example 1: GET Request

* **Scenario:** A client retrieves a user profile.
* **Request:**

```http
GET /api/v1/users/123 HTTP/1.1
Host: example.com
Authorization: Bearer <token>
```

* **Response:**

```json
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com"
}
```

* **Working:** The server looks up user `123` and returns the data. Status code would be **200 OK** if successful.

### Example 2: POST Request

* **Scenario:** A client creates a new user.
* **Request:**

```http
POST /api/v1/users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Bob",
  "email": "bob@example.com"
}
```

* **Response:**

```json
{
  "id": 124,
  "name": "Bob",
  "email": "bob@example.com"
}
```

* **Working:** The server processes the request body (payload), creates the user, and responds with a **201 Created** status along with the new object.

---

## Common API Types

* **RESTful APIs:** Resource-based, use HTTP verbs and status codes; most common.

  **Example (REST GET):**

  ```http
  GET /api/v1/products/45 HTTP/1.1
  Host: example.com
  Authorization: Bearer <token>
  ```

  **Response:**

  ```json
  {
    "id": 45,
    "name": "Laptop",
    "price": 1200
  }
  ```

  **Example (REST POST):**

  ```http
  POST /api/v1/products HTTP/1.1
  Host: example.com
  Content-Type: application/json

  {
    "name": "Monitor",
    "price": 250
  }
  ```

  **Response:** 201 Created with new product details.

* **GraphQL:** Client specifies the shape of data they need; single endpoint with query language.

  **Example (GraphQL query):**

  ```http
  POST /graphql HTTP/1.1
  Host: example.com
  Content-Type: application/json

  {
    "query": "{ user(id: \"123\") { name email } }"
  }
  ```

  **Response:**

  ```json
  {
    "data": {
      "user": {
        "name": "Alice",
        "email": "alice@example.com"
      }
    }
  }
  ```

* **gRPC:** High-performance RPC using protobufs; binary protocol, used in microservices.

  **Example:** A client calls `CreateOrder` method on `OrderService`.

  ```protobuf
  service OrderService {
    rpc CreateOrder (OrderRequest) returns (OrderResponse);
  }
  message OrderRequest {
    string productId = 1;
    int32 quantity = 2;
  }
  message OrderResponse {
    string orderId = 1;
    string status = 2;
  }
  ```

  **Working:** Client sends binary request with product ID and quantity, server responds with order ID and status.


---

## Core Concepts

* **Endpoints & Resources:** URL paths representing objects or actions.
* **HTTP Methods & Status Codes:** Methods map to actions (GET=read, POST=create), status codes indicate result (200, 201, 400, 401, 403, 404, 500).
* **Authentication vs Authorization:** Auth proves who you are (API keys, OAuth, JWT). Authorization decides what you can do (roles, scopes).
* **Rate Limiting & Throttling:** Protects APIs from abuse.
* **Pagination & Filtering:** For large datasets, returned in pages with cursor or offset.
* **Content Types & Serialization:** JSON is common; APIs must validate and parse inputs safely.

---

## Common API Security Issues

* **Broken Object Level Authorization (BOLA / IDOR):** Users access objects they shouldn’t.
* **Broken Authentication / Token issues:** Weak token handling, predictable tokens, improper revocation.
* **Injection (SQL/NoSQL/Command):** Unsanitized inputs reaching backend queries.
* **Excessive Data Exposure:** APIs returning more fields than necessary.
* **Mass Assignment / BOPLA:** User-controlled fields updating restricted properties.
* **Rate Limit Bypass & Abuse:** Missing or misconfigured throttling.
* **Improper Error Handling & Information Leakage:** Detailed errors exposing internals.

---

## Testing Checklist

1. **Discover endpoints:** Read docs, use OpenAPI/Swagger, or crawl API endpoints.
2. **Test auth flows:** Verify token issuance, expiration, revocation, scope checks.
3. **Object access tests (BOLA):** Try accessing other users' IDs and resources.
4. **Parameter tampering:** Modify IDs, types, headers, and JSON fields.
5. **Injection & input validation:** Test for SQL/NoSQL injection and unsafe evals.
6. **Rate limit tests:** Send bursts of requests and observe throttling behavior.
7. **Fuzz inputs & schema mismatch:** Send unexpected types, large payloads, nulls.
8. **Check responses for sensitive data:** Tokens, PII, internal paths.
9. **Test business logic:** Abuse workflows to cause unauthorized actions.
10. **Monitor logs & errors:** Ensure errors are not leaking secrets.

---

## Secure Design

* **Validate all inputs server-side.** Never trust client validation alone.
* **Use least privilege for tokens and scopes.** Short-lived tokens where possible.
* **Enforce strong authentication & session management.** Use proven libraries.
* **Implement rate limiting and abuse detection.**
* **Whitelist outputs & avoid overexposing data.**
* **Secure configuration & transport:** TLS everywhere, secure headers, CORS rules.
* **Log safely:** Mask secrets, keep audit trails for sensitive actions.

---

## Tools & Resources

* **Documentation sources:** OpenAPI/Swagger specs, Postman collections.
* **Testing tools:** curl, Postman, Burp Suite, OWASP ZAP, or simple Python scripts for automation.
* **Standards & references:** OWASP API Top 10, RFCs for HTTP, JWT spec, OAuth2 docs.

---

`Conclusion
Keep tests repeatable and non-destructive. Start with API docs, map endpoints and trust boundaries, then run the checklist. 
For testers: practice on intentionally vulnerable API labs before testing real systems.`

