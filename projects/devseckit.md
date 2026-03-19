# DevSecKit

DevSecOps security scanner orchestrator for automated multi-category security testing

**GitHub Link:** [https://github.com/imharshitaa/DevSecKit](https://github.com/imharshitaa/DevSecKit)  
**Live Simulation:**  
**Status:** IN PROGRESS

## Practical DevSecOps Security Orchestrator for Automated Scanning

DevSecKit is a terminal-first orchestration tool designed to run multiple security scanners across different categories from a single CLI workflow.

`Python`, `shell scripts`, `open source security tools`, `json reports`, `docker`

It integrates static, dynamic, and runtime security testing into a unified execution pipeline.

The framework supports:

- `SAST`: static code analysis using Semgrep
- `SCA`: dependency and vulnerability scanning using Dependency-Check and Trivy
- `Secrets Detection`: credential and token leakage detection using Gitleaks and TruffleHog
- `IaC Security`: infrastructure misconfiguration detection using Checkov
- `DAST`: dynamic application security testing using OWASP ZAP
- `IAST`: runtime checks for headers, cookies, and application behavior

### Goal

Build a single-command DevSecOps framework that automates security scanning across multiple layers and provides normalized, actionable security findings.

### Project Blueprint

```text
Project Blueprint (DevSecKit)

+--------------------------------------+
|        Developer / CI Pipeline       |
|   (Code Push / PR / Build Trigger)   |
+------------------+-------------------+
                   |
                   v
+--------------------------------------+
|     DevSecKit Controller Engine      |
|   (CLI / Workflow Orchestrator)      |
+------------------+-------------------+
                   |
        ----------------------------------------
        |            |            |            |
        v            v            v            v
+------------+  +------------+  +------------+  +------------+
| SAST       |  | SCA        |  | Secrets    |  | Config     |
| Scanner    |  | Scanner    |  | Scanner    |  | Scanner    |
| (code)     |  | (deps)     |  | (keys)     |  | (misconfig)|
+------------+  +------------+  +------------+  +------------+
        |            |            |            |
        ------------+------------+------------+
                     |
                     v
+--------------------------------------+
|        Scan Execution Engine         |
|   (runs tools / scripts / checks)    |
+------------------+-------------------+
                   |
                   v
+--------------------------------------+
|        Analyzer / Correlation        |
| (dedupe, severity, risk scoring)     |
+------------------+-------------------+
                   |
        ------------------------------
        |            |               |
        v            v               v
+------------+  +-------------+  +-------------+
| Findings   |  | Reports     |  | Logs        |
| DB / JSON  |  | (HTML/JSON) |  | (debug)     |
+------------+  +-------------+  +-------------+
        |
        v
+--------------------------------------+
|     Output / Integration Layer       |
| (CLI / GitHub Actions / CI alerts)   |
+--------------------------------------+
```

### Why I Built This

Security scanning tools are often used independently, leading to fragmented workflows and inconsistent reporting.

DevSecKit was built to provide:

- interface for multiple security tools
- automated orchestration across scanning categories
- consistent and normalized reporting output
- DevSecOps integration for engineers

### Use Cases

- DevSecOps Pipelines: integrate automated security scans into CI/CD workflows
- Application Security Testing: run multi-layer scans on source code and running applications
- Security Audits: generate consolidated reports across multiple tools
- Developer Security Validation: verify vulnerabilities before deployment
