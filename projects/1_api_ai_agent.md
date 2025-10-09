# AI-Pentest

AI Testcases and Toolkit for Pentesting

Github link: `https://github.com/imharshitaa/AI-Pentest`

**Status: In progress**

## Practical AI Pentesting Toolkit for Automated Security Testing

AI Testcases is a practical project that helps test the security of AI systems and agent APIs. 
It includes automated attack scenarios, payload generators, and testing scripts that simulate real-world vulnerabilities. 
The goal is to give red teams and engineers ready-to-use tools and reports to check and strengthen their AI security defenses.

- **LLMs**: prompt injection, data leakage, hallucination abuse, and jailbreaks.
- **AI Agents**: instruction override, tool misuse, workflow manipulation, and context poisoning.
- **AI APIs / Services**: auth bypass, input tampering, rate abuse, and insecure endpoints.
- **ML Models & Pipelines**: data poisoning, model theft, and supply-chain compromise.
- **AI Applications**: logic flaws, insecure integrations, and privacy or access control leaks.

This project provides ready-to-use, categorized test suites and payloads to safely evaluate AI vulnerabilities like jailbreaks, backdoors, and workflow manipulation. It includes a cross-platform test runner with sandboxing, result reporting, and CI integration, plus documentation and example playbooks for engineers and security teams to run reproducible, auditable tests.

### Goal:
Create a practical, shareable toolkit that helps security teams discover, reproduce, and fix AI-related vulnerabilities faster.

## Why I built this?
AI systems are being integrated into critical products quickly, but defensive practices and standard testcases lag behind. I built this project to bridge that gap, to give engineers and red teams a concrete, reusable set of tests and tools so vulnerabilities can be discovered early, fixed reliably, and shared responsibly.

## Tech used:
1. Python (core scripts, payload generators, test runners)
2. Docker (sandboxed execution)
3. GitHub Actions (CI for running safe suites)
4. JSON for test suites & result reporting

## Use cases:

- **Automated VAPT** for AI agent APIs and model-serving endpoints.
- **Engineering verification:** run test-suite in CI after a patch to confirm fix.
- **Bug bounty / triage:** reproduce reports quickly and capture evidence.
- **Research:** catalog new attack patterns and evaluate mitigations.













