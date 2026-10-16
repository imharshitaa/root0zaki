# APIvector

API security testing toolkit for structured vulnerability discovery and exploit validation

**Status:** In progress

**GitHub Link:** [https://github.com/imharshitaa/APIvector](https://github.com/imharshitaa/APIvector)  
**Live Simulation:** [https://imharshitaa.github.io/APIvector/demo/](https://imharshitaa.github.io/APIvector/demo/)

## Practical API Pentesting Toolkit for Automated Security Testing

APIvector is a command-driven API security testing toolkit designed to evaluate REST and web APIs for common vulnerabilities using structured test cases and modular execution scripts.

`Python`, `CLI`, `Modular script architecture`, `Requests library`, `GitHub`

It uses categorized scripts to perform:

`discovery -> test -> exploit`

Each phase is implemented through standardized modules:

- `*_discovery.py` -> endpoint and behavior analysis
- `*_test.py` -> vulnerability validation
- `*_exploit.py` -> exploit execution and evidence generation

The toolkit focuses on identifying real-world API vulnerabilities including:

- **Access Control Issues**: BOLA, BFLA, broken authorization
- **Injection Attacks**: SQLi, NoSQLi, command injection
- **Data Exposure**: information disclosure, mass assignment
- **Authentication Flaws**: JWT issues, weak auth, session flaws
- **API Misconfigurations**: CORS, rate limiting, security misconfig
- **Advanced Attacks**: SSRF, XXE, deserialization, path traversal

## Goal

Build a practical and extensible API security testing toolkit that enables engineers to systematically discover, validate, and exploit API vulnerabilities with structured workflows.

## Project Blueprint

```text
+------------------------+
|   User Input (CLI)     |
|   URL / Swagger / API  |
+-----------+------------+
            |
            v
+------------------------+
|   Controller Engine    |
|   (main.py / runner)   |
+-----------+------------+
            |
    -------------------------
    |           |           |
    v           v           v
+------------+ +------------+ +------------+
| Discovery  | | Auth Test  | | Injection  |
| Scripts    | | Scripts    | | Scripts    |
+------------+ +------------+ +------------+
     |              |              |
     -------+-------+-------+------
             |
             v
+------------------------------+
|     Request Engine           |
|   (HTTP client wrapper)      |
+--------------+---------------+
               |
               v
+------------------------------+
|     Response Analyzer        |
|   (pattern + timing etc.)    |
+--------------+---------------+
               |
               v
+------------------------------+
|      Output / Report         |
|    (CLI / JSON / logs)       |
+------------------------------+
```

## Why I Built This

APIs are a primary attack surface in modern applications, but testing them is often manual, inconsistent, and tool-dependent.

APIvector was built to provide:

- standardized workflow for API security testing
- modular and reusable test cases
- CLI-based execution for fast testing
- vulnerability validation and exploit reproduction

## Use Cases

- API Pentesting: test REST APIs for common and advanced vulnerabilities
- Security Validation: verify fixes by re-running structured test cases
- Research Testing: reproduce vulnerabilities and capture exploit evidence
- Learning & Labs: practice API security testing using categorized scenarios
