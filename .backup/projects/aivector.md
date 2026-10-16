# AIvector

AI Security Testing Framework for Automated Pentesting of LLMs, AI Agents, and AI APIs

**Status:** Active Development

**Source Code:** [`https://github.com/imharshitaa/AIvector`](https://github.com/imharshitaa/AIvector)  
**Live Terminal Simulation:** [https://imharshitaa.github.io/AIvector/demo/](https://imharshitaa.github.io/AIvector/demo/)

## Practical AI Security Testing Framework for Automated Pentesting

AIvector is a terminal-first security testing framework designed to evaluate AI systems, LLM APIs, and agent-based architectures for real-world vulnerabilities. It provides structured test execution, modular test cases, and automated reporting to simulate offensive security scenarios against AI-driven applications.

`Python`, `CLI framework`, `JSON`, `GitHub Pages`, `Shell scripts`

---

## What AIvector Tests

- **LLMs**: prompt injection, system prompt override, unsafe outputs, and jailbreak scenarios
- **AI Agents**: instruction manipulation, tool misuse, workflow abuse, and context poisoning
- **AI APIs / Services**: insecure endpoints, input tampering, authentication gaps, and rate abuse
- **Model Endpoints**: exposure risks, misuse patterns, and response behavior validation
- **AI Applications**: logic flaws, unsafe integrations, and data leakage paths

The framework uses a standardized testing lifecycle, `discovery -> test -> exploit`, to keep assessments consistent and reproducible. Each test case runs independently, which makes the system extensible and practical for repeated security validation.

---

## Goal

Build a practical and extensible framework that enables security engineers and researchers to systematically discover, validate, and report AI-related vulnerabilities with reproducible test workflows.

## Project Blueprint

```text
/Users/harshitaaa/Projects/AIvector
├── ai                              # launcher for ai run <target_url>
├── main.py                         # command parser + run orchestration
├── demo/
│   ├── __init__.py
│   ├── framework.py                # case loading, stage execution, report write
│   ├── ui.py                       # terminal rendering and pre-input helper text
│   └── index.html                  # demo page served at /demo/
├── common/
│   ├── case_utils.py               # shared case helper methods
│   └── __init__.py
├── scripts/
│   ├── install_ai_command.sh       # installs ai command to ~/.local/bin
│   └── uninstall_ai_command.sh     # removes ai command from ~/.local/bin
├── <test_case_folder>/
│   ├── discovery.py
│   ├── test.py
│   └── exploit.py
├── reports/
│   ├── latest_report.json
│   └── target_history.json
├── .github/workflows/pages.yml     # GitHub Pages deployment workflow
└── index.html                      # root page linking to live demo
```

---

## Why I Built This

AI systems are rapidly being integrated into production environments, but standardized security testing approaches for LLMs and AI APIs are still evolving. AIvector was built to provide a structured and automated way to test AI attack surfaces, enabling engineers to identify vulnerabilities early, validate exploitability, and improve system resilience.

## Use Cases

- **AI Pentesting**: automated security testing of LLM APIs and AI-powered endpoints
- **Security validation**: verify fixes by re-running structured test cases
- **Research**: reproduce vulnerabilities and capture consistent evidence
- **Security engineering workflows**: integrate testing into development and CI pipelines
