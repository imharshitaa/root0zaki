# Playbox

`Vulnerable Lab Environment for Security Research & Testing`

Github link: https://github.com/imharshitaa/playbox

Status: In progress

Playbox is a docker-packaged collection of intentionally vulnerable applications and services (web, API, LLM mock, network, cloud) built for security engineers, researchers, and students can safely practice discovery, exploitation, and mitigation techniques in an isolated environment. 
It’s lightweight, reproducible with Docker Compose, and aimed at research-quality demonstrations and repeatable labs.

Playbox is a lab environment that groups minimal but realistic vulnerable targets by domain:
- Web — small Flask app demonstrating common OWASP web flaws.
- API — REST API with SQLi, IDOR, weak auth examples.
- LLM — mock LLM service for prompt-injection testing.
- Network — tiny TCP server with unsafe framing/logic for network-level tests.
- Cloud — MinIO with intentionally insecure policy for object-store scenarios.
- Payloads — ready-made payload snippets (text/json) for exercises.

Goal:
The goal of Playbox is to provide a lightweight, easy-to-deploy lab of intentionally vulnerable apps so students and security teams can safely practice finding, exploiting, and fixing real-world vulnerabilities. 
It aims to include clear, reproducible exercises and CI-friendly tests to make learning, testing, and demonstrating security improvements simple and repeatable.

Why I built it?
- Safe playground to practice security testing without real-world risks.
- Help security engineers and product teams test detection, triage, and response workflows (DevSecOps, CI/CD security testing).

Tech used:
Python | Docker & Docker Compose for setup

Use cases:
- OWASP Top 10 workshops — show vuln chains end-to-end on the web app.
- API security — test SQLi detection, authentication weaknesses, and IDOR proof-of-concepts.
- LLM safety — craft prompt-injection attacks against a controllable mock LLM.
- Network fuzzing — experiment with malformed framing, TCP clients, and monitoring.
- Cloud policy auditing — practice secure-minio policies and S3 ACL hardening.
- Tool integration — run automated scans (Burp, SQLMap, Nmap, OSINT tools) in CI to validate detection rules.















