# Playbox

Vulnerable lab environment for security testing and attack simulation

**Source Code:** [https://github.com/imharshitaa/playbox](https://github.com/imharshitaa/playbox)  
**Status:** IN PROGRESS

## Vulnerable Lab Environment for Security Testing and Exploitation

Playbox is a intentional vulnerable, multi-service lab environment designed to simulate real-world security flaws across multiple domains including web, API, AI, network, and cloud systems.

It provides structured environments for testing vulnerabilities based on OWASP Top 10 (2021) and additional real-world attack scenarios.

`Python`, `Docker`, `Nginx`, `TCP services`, `miniIO`

- **Web Applications**: XSS, CSRF, file upload issues, path traversal
- **APIs**: SQLi, IDOR, weak authentication, CORS, SSRF
- **AI Systems**: prompt injection, unsafe tool execution, agent misuse
- **Network Services**: unsafe protocols, length-based attacks, TCP flaws
- **Cloud Services**: metadata SSRF, insecure configurations, policy misconfigurations

### Gateways

```text
/labs/web/
/labs/api/
/labs/ai/
/labs/network/
/labs/cloud/
```

### Project Blueprint

```text
+------------------------------+
|     User Interface (UI)      |
|   (Web / App / Player UI)    |
+--------------+---------------+
               |
               v
+------------------------------+
|   Controller / App Logic     |
|   (State + Routing + Events) |
+--------------+---------------+
               |
    -------------------------------
    |             |              |
    v             v              v
[Media Player] [Search Module] [User Actions]
 (play/pause)   (query/data)   (click/input)
    |             |              |
    --------------+--------------+
                  |
                  v
+--------------------------------------+
|     Content Handler / Manager        |
| (fetch media / organize playlists)   |
+------------------+-------------------+
                   |
                   v
+--------------------------------------+
|        API / Data Layer              |
| (external APIs / local storage)      |
+------------------+-------------------+
                   |
        ------------------------------
        |            |               |
        v            v               v
+------------+  +-------------+  +-------------+
| Media Data |  | User Data   |  | Cache Store |
+------------+  +-------------+  +-------------+
        |
        v
+--------------------------------------+
|     Processing / Playback Engine     |
| (stream handling, buffering, sync)   |
+------------------+-------------------+
                   |
                   v
+--------------------------------------+
|        Output / Experience Layer     |
| (audio/video playback + UI updates)  |
+--------------------------------------+
```

### Goal

Create a realistic and controlled lab environment that allows security engineers to practice exploitation, validate tools, and simulate multi-domain attack scenarios.

### Why I Built This

Security testing requires realistic environments, but most labs are either too simple or domain-specific.

Playbox was built to provide:

- a multi-domain vulnerable environment in one platform
- realistic attack surfaces across modern systems (API, AI, cloud)
- hands-on testing for offensive security workflows
- environment for learning, experimentation, and tool validation

### Use Cases

- Pentesting Practice: exploit OWASP Top 10 vulnerabilities in controlled environments
- Tool Validation: test security tools against known vulnerable targets
- Security Training: hands-on learning across web, API, AI, and cloud domains
- Research & Simulation: replicate real-world attack scenarios safely
