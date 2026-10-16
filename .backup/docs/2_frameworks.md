# Frameworks for Hacking

Conceptual frameworks, standards, and knowledge systems used for planning and performing security testing

---

When people say "frameworks" in cybersecurity they often mean **conceptual models and standardized references** that guide how we think about threats, vulnerabilities, testing coverage, and reporting — not specific tools. These frameworks help juniors structure tests, prioritize findings, and communicate risks clearly.

---

## Core Frameworks 

### OWASP (Open Web Application Security Project)

* **Definition:** Collections like the *OWASP Top 10* and *OWASP API Top 10* that list common, high-impact web/API vulnerabilities.
* **Importance:** Use these as a checklist for web/API testing and as a common language when reporting issues (e.g., "SQLi — OWASP Top 10: A03").

### MITRE ATT\&CK

* **Definition:** Knowledge base of attacker techniques and tactics organized by phases (Initial Access, Execution, Persistence, etc.).
* **Importance:** Helps map findings to real attack behaviors, show impact, and design detection/mitigation controls.

### MITRE CAPEC / CWE / CVE

* **CAPEC (Common Attack Pattern Enumeration and Classification):** Patterns of attack that help you design test cases.
* **CWE (Common Weakness Enumeration):** Classes of coding and design weaknesses (useful when describing root causes).
* **CVE (Common Vulnerabilities and Exposures):** Identifiers for known public vulnerabilities you may find in software/dependencies.

### NIST & Security Controls (e.g., NIST SP 800-series)

* **Definition:** Best-practice guidance and control families for governance, risk management, and technical controls.
* **Importance:** Useful for aligning testing scope with organizational requirements and compliance frameworks.

### STRIDE (Threat modeling)

* **Definition:** A mnemonic for common threat categories: **S**poofing, **T**ampering, **R**epudiation, **I**nformation disclosure, **D**enial of service, **E**levation of privilege.
* **Importance:** Lightweight model to build threat models, prioritize test cases based on likely attacker goals.

### PASTA (Process for Attack Simulation and Threat Analysis)

* **Definition:** Risk-centric threat modeling process with 7 stages that link business risk to technical testing.
* **Importance:** Good for teams who must justify testing priorities to stakeholders and show business impact.

### Cyber Kill Chain

* **Definition:** Attack sequence model (Recon → Weaponize → Deliver → Exploit → Install → Command & Control → Actions on Objectives).
* **Importance:** Helps map detection gaps and design tests that emulate real adversary flows.

### CVSS (Common Vulnerability Scoring System)

* **Definition:** Standardized scoring (0–10) that quantifies severity of vulnerabilities.
* **Importance:** Use CVSS to prioritize remediation and explain risk magnitude to non-technical stakeholders.

---

## How to Use These Frameworks in Testing

1. **Define scope using NIST / business requirements.** Map assets and critical business functions.
2. **Threat model with STRIDE or PASTA.** Identify likely attack goals and weak points.
3. **Use OWASP lists as test-case checklists.** For web/API work, follow OWASP Top 10 and API Top 10.
4. **Simulate attacker techniques with MITRE ATT\&CK.** Translate ATT\&CK techniques to tests and detection requirements.
5. **Classify findings with CWE/CVEs.** Attach CWE types and CVEs (if applicable) to each finding.
6. **Prioritize via CVSS & business impact.** Combine severity scores with asset criticality.
7. **Report actionable remediation mapped to controls (NIST).** Show what to fix and how it reduces risk.

---

## Roadmap

* Start with **OWASP Top 10** to learn common web vulnerabilities.
* Learn **CVSS** scoring to explain impact.
* Study **MITRE ATT\&CK** to connect technical bugs to attacker goals.
* Practice threat modeling with **STRIDE** on small apps.
* Read and cross-reference **CWE/CAPEC** entries when analyzing root causes.
* Use **NIST** or company policies to align tests to compliance or audits.

`Conceptual frameworks are the **map and vocabulary** for security testing. 
They guide what to test, why it matters, and how to explain it. 
For a tester, mastering a few of these (OWASP, MITRE ATT\&CK, STRIDE, CVSS) will greatly improve both testing quality and communication with teams.`

