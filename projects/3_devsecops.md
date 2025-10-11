# DevSecKit

A modular security toolkit for developers — automating code, dependency, and workflow vulnerability testing through CI/CD.

**Github link**: ``` https://github.com/imharshitaa/DevSecKit ```

STATUS: IN PROGRESS

DevSecKit is a lightweight, modular security toolkit designed to help developers and researchers integrate security testing directly into their development workflows.
It automates static analysis, dependency scanning, and configuration validation — making it easier to detect vulnerabilities early in both local environments and CI/CD pipelines.

The toolkit supports SAST (Static Application Security Testing), SCA (Software Composition Analysis), and other essential DevSecOps checks through easily executable scripts or automated workflows.

### GOAL:

To make security testing accessible, simple, and automation-friendly for all developers — encouraging secure coding practices throughout the software development lifecycle (SDLC).

- Automate vulnerability detection for code and dependencies.
- Enable fast, repeatable scans in both manual and CI/CD environments.
- Provide clear, readable reports that developers can act on.
- Evolve into a one-stop DevSecOps testing framework.

``` Automated scanning | CI/CD integration | Multi-environment support | Extensible open source ```

| Tool / Framework               | Type              | Purpose                                                  |
| ------------------------------ | ----------------- | -------------------------------------------------------- |
| **Semgrep**                    | SAST              | Detects insecure code patterns and logic flaws.          |
| **Bandit**                     | SAST              | Identifies common Python security issues.                |
| **Safety**                     | SCA               | Checks dependencies for known CVEs.                      |
| **pip-audit**                  | SCA               | Audits Python packages for vulnerabilities.              |
| **Trivy / Grype**              | Container / SCA   | Scans Docker images and dependencies.                    |
| **Gitleaks**                   | Secrets Detection | Finds hardcoded secrets or API keys in codebases.        |
| **Checkov / tfsec**            | IaC               | Validates Terraform and cloud configuration security.    |
| **Custom Bash/Python Scripts** | CI Tools          | Automates scanning, reporting, and pipeline integration. |


## Why I Built This Project:

Security testing is often scattered, forcing developers to use multiple disconnected tools instead of a single, streamlined workflow.

DevSecKit aims to simplify DevSecOps adoption by providing a plug-and-play toolkit that connects code, dependency, and pipeline-level security testing into one cohesive system.
It empowers both developers and researchers to build, test, and deploy securely from the start.

## Tech Stack:
- **Languages:** Python, Bash, PowerShell
- **CI/CD:** GitHub Actions, GitLab CI
- **Security Tools:** Semgrep, Bandit, Safety, pip-audit, Trivy, Gitleaks, Checkov
- **Reporting:** JSON, Markdown, HTML


## Use Cases:
- Integrating SAST/SCA into DevOps workflows.
- Automating pre-deployment vulnerability scans.
- Developer security training and code review support.
- Security baseline testing for open-source and enterprise projects.
- Building reproducible DevSecOps pipelines.










