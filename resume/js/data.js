// All resume content lives here. Edit this file to update the site.
// Text wrapped in **double asterisks** is highlighted on the page.

window.RESUME = {
  name: "José Pedro Azevedo",
  shortName: "José Pedro",
  title: "Senior Cyber Security Professional",
  roles: [
    "Security Business Partnering",
    "Governance, Risk & Compliance",
    "Security Architecture",
    "AI & Automation Security",
  ],
  location: "Lisbon, Portugal",
  email: "silvaze.jp@gmail.com",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-pedro-azevedo/",
  cvFile: "assets/Jose_Pedro_Azevedo_CV.pdf",
  careerStart: "2012-05",

  summary: [
    "Cyber security professional with 14 years in technology, the last 9 in cyber security, across **security operations**, **security architecture** and **governance, risk & compliance** in large multinational groups.",
    "I assess projects against policy and regulation (**NIS2, DORA, ISO 27001, NIST**) and turn requirements into clear decisions that business and engineering can act on. Known for building structure where there was none, from a secure SDLC to operational playbooks. Currently focused on the **security of AI and automation initiatives**.",
  ],

  pillars: [
    {
      icon: "shield",
      title: "Governance, Risk & Compliance",
      text: "Assessing projects and group entities against NIS2, DORA, NIST and ISO 27001, from go/no-go decisions to audit readiness.",
    },
    {
      icon: "layers",
      title: "Security Architecture",
      text: "Secure SDLC built from scratch, SIEM redesign, cloud security on AWS and Azure, and security reviews of AI solutions.",
    },
    {
      icon: "nodes",
      title: "Security Business Partnering",
      text: "Turning regulatory and technical requirements into clear decisions that business, engineering and vendors can act on.",
    },
  ],

  // Career phases drive the colored trajectory bar and the timeline filters.
  phases: [
    { id: "telecom", label: "Telecom Engineering", color: "var(--phase-telecom)" },
    { id: "secops", label: "Security Operations", color: "var(--phase-secops)" },
    { id: "arch", label: "Security Architecture", color: "var(--phase-arch)" },
    { id: "grc", label: "GRC & Business Partnering", color: "var(--phase-grc)" },
  ],

  experience: [
    {
      id: "flutter",
      title: "Cybersecurity Business Partner",
      company: "Flutter Entertainment",
      location: "Lisbon, Portugal (Remote)",
      start: "2026-09",
      end: null,
      phase: "grc",
      bullets: [
        "Security business partner in the **Group Cyber Security Engagement & Enablement** function, covering **People (HR), Legal and Service Management**, from SaaS to in-house systems.",
        "Assess projects against internal policies mapped to **NIS2** and **NIST**, issuing **go / no-go decisions** with clear remediation paths to approval.",
        "Focus on **AI & Automation initiatives**, and contributed to improving the team's **security review templates**.",
      ],
    },
    {
      id: "bnp",
      title: "Senior Cyber Security Analyst",
      company: "BNP Paribas",
      location: "Lisbon, Portugal",
      start: "2025-06",
      end: "2026-09",
      phase: "grc",
      bullets: [
        "Assessed **group entities** against BNP Paribas cyber security requirements, from **third-party risk** to **asset management**; **led 2 entities** and supported 7 more through remediation.",
        "Used **DORA as a prioritization lens**, tracking DORA-mapped requirements as urgent KPIs.",
        "**Go-to analyst** for **Secure Development** and **Vulnerability Management**; improved reporting and metrics **without reducing risk coverage**.",
      ],
    },
    {
      id: "tls",
      title: "Cyber Security Architect",
      company: "TLScontact",
      location: "Lisbon, Portugal",
      start: "2022-01",
      end: "2025-05",
      phase: "arch",
      focus: "Teleperformance group",
      bullets: [
        "**Built the Secure SDLC from scratch**: **SAST/SCA before QA**, **DAST before production**, and critical findings blocking releases.",
        "Set up the **risk analysis framework** and gave security sign-off on new projects through **threat analysis and control definition**.",
        "Led the **SIEM review**, comparing market solutions, and the alignment with the group platform for cost reduction and centralized support.",
        "Ran **vendor security assessments** and **cloud security reviews**, and supported **ISO 27001** and government client audits.",
      ],
    },
    {
      id: "nokia-ops",
      title: "Cyber Security Professional – Operations Lead",
      company: "Nokia",
      location: "Lisbon, Portugal",
      start: "2017-09",
      end: "2021-12",
      phase: "secops",
      focus: "Cyber Security Hub · Operations Lead from 2019",
      bullets: [
        "**One of the first 4 members** of the Cyber Security Hub, securing labs and client-facing DMZs across **~8 business units**.",
        "**Led Operations from 2019**, managing a **front-line team of 3 in India**.",
        "Delivered **100% Qualys coverage**, **~98% endpoint protection** coverage, and a redesigned **Logstash → QRadar** logging pipeline.",
        "Drove **hardening and patching** (gold images, WSUS, Linux checks) and maintained the security guides used across business units.",
      ],
    },
    {
      id: "ericsson",
      title: "NOC Consultant & Team Lead",
      company: "Ericsson",
      location: "Bucharest, Romania",
      start: "2015-10",
      end: "2016-06",
      phase: "telecom",
      bullets: [
        "**Chosen as team lead** for a **13-person** NOC project for a leading African mobile operator, owning procedures, SLAs and project metrics.",
        "Then **set up the NOCs for Cameroon and Mali** on my own, through to handover.",
      ],
    },
    {
      id: "nokia-radio",
      title: "Radio Network Integration Engineer",
      company: "Nokia",
      location: "Lisbon, Portugal",
      start: "2014-05",
      end: "2015-10",
      phase: "telecom",
      focus: "Network Integration Center · Radio Stream team",
      bullets: [
        "Integrated radio sites (**2G to LTE**) into operator networks across **Brazil, Spain and Colombia**, working remotely in **Spanish and English**.",
        "Selected for the **Radio Stream team** of experienced engineers deployed across projects.",
      ],
    },
    {
      id: "nokia-noc",
      title: "NOC Engineer – Mobile Transmission",
      company: "Nokia",
      location: "Lisbon, Portugal",
      start: "2012-05",
      end: "2014-05",
      phase: "telecom",
      focus: "Network Operations Center · 24/7",
      bullets: [
        "Monitored and troubleshot a major Spanish operator's **mobile transmission network** in a **24/7 rotation**, owning incidents end to end.",
        "Became the team's **most experienced member**, **trained newcomers** and **wrote many of the team's procedures**.",
      ],
    },
  ],

  // `used` lists the experience ids where the skill was applied (drives the
  // "where I used it" highlighting). Leave it empty for general skills.
  skills: [
    {
      category: "Governance, Risk & Compliance",
      items: [
        { name: "NIS2", used: ["flutter"] },
        { name: "DORA", used: ["bnp"] },
        { name: "ISO 27001", used: ["bnp", "tls"] },
        { name: "NIST", used: ["flutter", "bnp", "tls"] },
        { name: "Security Project Assessment", used: ["flutter", "tls"] },
        { name: "Risk Assessment & Treatment", used: ["flutter", "bnp", "tls"] },
        { name: "Third-Party / Vendor Risk", used: ["bnp", "tls"] },
        { name: "Control Design & Effectiveness", used: ["bnp", "tls", "nokia-ops"] },
        { name: "Policy & Standards", used: ["flutter", "bnp"] },
        { name: "Audit Readiness", used: ["bnp", "tls"] },
      ],
    },
    {
      category: "Security Architecture",
      items: [
        { name: "Secure-by-Design", used: ["flutter", "tls"] },
        { name: "Threat Analysis", used: ["tls"] },
        { name: "AI Solution Security Reviews", used: ["flutter"] },
        { name: "Cloud Security (AWS, Azure)", used: [] },
        { name: "SIEM Architecture & Integration", used: ["tls", "nokia-ops"] },
        { name: "Web Application Firewall (WAF)", used: ["tls"] },
        { name: "Defense in Depth", used: ["tls", "nokia-ops"] },
      ],
    },
    {
      category: "AppSec & DevSecOps",
      items: [
        { name: "Secure SDLC", used: ["tls", "bnp"] },
        { name: "DevSecOps", used: ["tls"] },
        { name: "SAST / DAST / SCA", used: ["tls"] },
        { name: "Vulnerability Management", used: ["bnp", "tls", "nokia-ops"] },
        { name: "Secure Development Assessment", used: ["bnp"] },
      ],
    },
    {
      category: "Security Operations",
      items: [
        { name: "SIEM (QRadar, Sentinel, Exabeam, ELK)", used: ["tls", "nokia-ops"] },
        { name: "Vulnerability Scanning (Qualys)", used: ["nokia-ops"] },
        { name: "Endpoint Protection (Symantec)", used: ["nokia-ops"] },
        { name: "Patch Management (WSUS)", used: ["nokia-ops"] },
        { name: "OS Hardening", used: ["nokia-ops"] },
        { name: "Incident & Root Cause Analysis", used: ["nokia-noc", "ericsson"] },
      ],
    },
    {
      category: "Leadership & Delivery",
      items: [
        { name: "Stakeholder Management", used: ["flutter", "bnp", "tls", "nokia-ops", "ericsson"] },
        { name: "Business Partnering", used: ["flutter", "bnp"] },
        { name: "Team Leadership", used: ["nokia-ops", "ericsson"] },
        { name: "Cross-functional Coordination", used: ["flutter", "bnp", "tls", "nokia-ops", "nokia-radio"] },
        { name: "Procedures & Playbooks", used: ["flutter", "nokia-ops", "ericsson", "nokia-radio", "nokia-noc"] },
        { name: "Training & Mentoring", used: ["nokia-ops", "nokia-noc"] },
      ],
    },
    {
      category: "Tools & Foundations",
      items: [
        { name: "Jira / Confluence", used: ["flutter"] },
        { name: "ServiceNow", used: ["bnp"] },
        { name: "Git / GitHub / GitLab", used: ["tls"] },
        { name: "Linux", used: ["nokia-ops"] },
        { name: "Windows", used: ["nokia-ops"] },
        { name: "Shell Scripting", used: ["nokia-ops"] },
        { name: "SQL", used: [] },
        { name: "Java", used: [] },
        { name: "C", used: [] },
      ],
    },
  ],

  education: {
    degree: "Bachelor's Degree in Telecommunications and Computer Engineering",
    school: "ISCTE – University Institute of Lisbon",
    period: "2017",
    location: "Lisbon, Portugal",
    field: "Information and Communication Technologies",
    modules: [
      { name: "Networking", detail: "Basic architecture, transmission protocols" },
      { name: "Programming", detail: "Java, C, Shell" },
      { name: "Guided Telecommunication Systems", detail: "Optical networks, fiber optics" },
      { name: "Radio Telecommunication Systems", detail: "Radio links, electromagnetic waves" },
      { name: "Information Security", detail: "Confidentiality, Integrity, Availability" },
      { name: "IoT with Open Source Tools", detail: "openHAB" },
    ],
  },

  // CEFR levels: listening, reading, spoken production, spoken interaction, writing
  languages: [
    { name: "Portuguese", native: true },
    { name: "English", levels: ["C1", "C1", "C1", "C1", "C1"] },
    { name: "Spanish", levels: ["B1", "B1", "B1", "B1", "B1"] },
  ],

  softSkills: [
    {
      title: "Communication",
      items: [
        "Turning technical and regulatory topics into clear decisions",
        "Engineering, business, vendors and government clients",
        "Multicultural, multilingual teams",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Chosen by peers as team lead",
        "Led an offshore operations team",
        "Training and mentoring newcomers",
      ],
    },
    {
      title: "Organization",
      items: [
        "Risk-based prioritization",
        "Cross-team coordination",
        "Process and template improvement",
      ],
    },
  ],
};
