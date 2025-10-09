# API_Pentest

Advanced API Testcases for Security Vulnerability Research (Beyond OWASP)

Github link: `https://github.com/imharshitaa/API_testcases`

Status: In Progress

API_Pentest is a cybersecurity project focused on identifying, testing, and documenting vulnerabilities in APIs.
It provides structured, reproducible test cases covering authentication flaws, injection attacks, broken access control, business logic issues, and workflow manipulation in API endpoints.
The project is evolving to include research-driven test plans beyond OWASP, targeting emerging and advanced API threats.

1. Automating test execution with Python-based CLI tools.
2. Generating payloads for common API security threats.
3. JSON-based reporting for VAPT documentation and audit-ready logs.
4. Safe sandbox execution using Docker environments.
5. Developing new API test methods and frameworks beyond OWASP Top 10.
6. Researching advanced API vulnerabilities

### Goal
Provide a unified framework to assess API security and reproduce vulnerability test cases efficiently while expanding coverage beyond traditional OWASP methodologies.

Objectives:
- API security testing with reusable scripts, payloads, and frameworks.
- Document evidence and outputs for security validation bug bounty reporting.
- Enable repeatable API vulnerability testing in CI/CD pipelines.
- Advance research on API test cases beyond OWASP standards.

## Why build this project?

APIs are the backbone of modern applications, yet most security testing is manual and limited to OWASP Top 10.

I built this project to systematize API security testing with structured test cases, reproducible payloads, and automation.

By expanding research beyond OWASP, the project addresses advanced and emerging API threats, helping engineers and researchers stay ahead of attackers.



## Tech used:
- Python: core test scripts, payload generators, CLI runner
- JSON: test suite and result reporting
- Docker: safe and isolated testing environments
- GitHub Actions: CI for automated API testing
- Requests / HTTP libraries: API request handling
- Bash / PowerShell: cross-platform command execution

## Scope:
1. Authentication and authorization testing
2. Injection attacks (SQL, command, header, parameter)
3. Broken access control and privilege escalation
4. Business logic and workflow testing
5. Rate limiting, throttling, and DoS scenarios
6. Known API vulnerability patterns
7. Advanced API threat research beyond OWASP



