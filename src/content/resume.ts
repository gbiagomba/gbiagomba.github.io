export type Resume = {
  name: string;
  location: string;
  phone?: string;
  email?: string;
  links: { label: string; href?: string }[];
  headline: string;
  summary: string[];
  technologySummary: {
    certifications: string[];
    systems: string[];
    languages: { level: string; items: string[] }[];
    spokenLanguages: string[];
    software: string[];
    skills: string[];
    lawsRegulations: string[];
  };
  experience: {
    company: string;
    location: string;
    dateRange: string;
    roles: {
      title: string;
      bullets: string[];
    }[];
  }[];
  projects: { name: string; description: string; url?: string; stars?: number }[];
  leadership: string[];
  education: { school: string; location: string; degree: string; date: string; notes?: string[] }[];
};

export const resume: Resume = {
  name: 'Gilles S. Biagomba',
  location: 'Philadelphia, PA',
  phone: '(484) 619-3275',
  email: 'gilles.biagomba@live.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/gbiagomba' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gilles-biagomba/' }
  ],
  headline: 'Application, AI/ML, Offensive Security & Cyber Security Leader',
  summary: [
    'Innovative, adaptable, and results-driven Security Engineer with 7+ years specializing in AI/ML security, penetration testing, application security, and cloud security.',
    'Expertise in identifying and mitigating complex security risks, securing large-scale AI systems, and collaborating cross-functionally to build resilient security architectures.',
    'Strong problem-solving, leadership in high-stakes environments, and ability to bridge security gaps between development and business teams.',
    'Recognized for mentorship, technical excellence, and strategic thinking in Big Tech environments.'
  ],
  technologySummary: {
    certifications: ['Possesses CB Response Admin', 'CB Response Advance Admin', 'Pursuing OSWE'],
    systems: [
      'Windows (7-11, Server 2008-2020)',
      'UNX/NIX (RHEL/CentOS, Debian/Ubuntu/Kali, BSD, MacOSX)'
    ],
    languages: [
      { level: 'Beginner', items: ['Assembler', 'C/C++', 'PowerShell', 'Rust'] },
      { level: 'Intermediate', items: ['HTML5', 'Go', 'Java', 'JavaScript', 'Python'] },
      { level: 'Advanced', items: ['Bash/Shell'] }
    ],
    spokenLanguages: ['English', 'French'],
    software: [
      'AWS',
      'Azure',
      'Burp Suite',
      'Carbon Black',
      'Chatbox AI',
      'ChatGPT',
      'Claude',
      'Checkmarx',
      'Codename Goose',
      'Command Prompt (Windows)',
      'Crowdstrike',
      'Cygwin',
      'DeepSeek',
      'Docker',
      'Firefly',
      'Gemini',
      'GCP',
      'Hashcat',
      'Hugging Face',
      'John The Ripper',
      'HP Fortify',
      'Hydra',
      'Kali',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'LLM/SLM/VLM',
      'Llama',
      'Metasploit Pro',
      'Molmo LLM',
      'MS Threat Modeler',
      'Nessus',
      'Nexpose',
      'Nmap',
      'Ollama',
      'OWASP Threat Dragon',
      'PE Frame',
      'Qualys',
      'SonarQube',
      'Symantec DLP',
      'Symantec Endpoint Protection',
      'Terminal (Linux)',
      'Veracode',
      'Virtual Box',
      'vLLM',
      'VMware Workstation',
      'VS Code',
      'Wireshark'
    ],
    skills: [
      'Active Directory',
      'AI/ML Security',
      'Application Security',
      'Automation',
      'Bilingual',
      'Blue Team',
      'CI/CD',
      'Cloud Security',
      'Coding',
      'Compliance Auditing',
      'Containerization',
      'Cross-functional Collaboration',
      'Customer Service/Support',
      'DAST',
      'Data Analysis',
      'Digital Forensics',
      'DevOpsSec',
      'DevSecOps',
      'Entrepreneurship',
      'Ethical Hacker',
      'Firewalls',
      'Flexible',
      'IAST',
      'Identity & Access Management (IAM)',
      'Incident Response',
      'Information Security',
      'Interpersonal Relationships',
      'Kubernetes',
      'Leadership',
      'LLM',
      'Mobile Applications',
      'Network Security',
      'Offensive Security',
      'OpenStack',
      'Orchestration',
      'Penetration Tester',
      'Physical Security',
      'Policy Writing',
      'Problem Solving',
      'Project Management',
      'Purple Teaming',
      'Quality Assurance',
      'RASP',
      'Red Team',
      'Reverse Engineering',
      'Risk Assessment',
      'Risk Management',
      'Salesmanship',
      'SAST',
      'Scripting',
      'SecDevOps',
      'Secure Code Review',
      'Secure Development Lifecycle (SDL)',
      'Security Engineering',
      'Security Management',
      'Security Operations',
      'Self-Motivated',
      'Social Engineering',
      'Software Development',
      'System Administration',
      'Team-Player',
      'Technical Support',
      'Threat Modeling (STRIDE, PASTA, OCTAVE, MAESTRO, DREAD)',
      'Web Application Security',
      'Zero Trust Architectures'
    ],
    lawsRegulations: [
      'CCP',
      'GDPR',
      'HIPAA',
      'ISO 27001/2',
      'NIST SP800',
      'OSWAP Top 10',
      'OWASP Top 10 Risks for LLMs',
      'PCI DSS 3.2',
      'SANS Top 25',
      'SOX',
      'WASC Threat Classification v2.0'
    ]
  },
  experience: [
    {
      company: 'Adobe Inc.',
      location: 'Philadelphia, PA',
      dateRange: 'January 2024 - Present',
      roles: [
        {
          title: 'Senior Product Security Engineer',
          bullets: [
            'Spearheading AI/ML security initiatives; developed a comprehensive AI threat modeling framework for AI-specific threats.',
            'Led IAM revamp with RBAC, reducing unauthorized access incidents by 25%.',
            'Ran SAST/DAST/IAST and automated testing pipelines, cutting manual testing by 30% and accelerating releases.',
            'Embedded secure coding practices across the SDLC, reducing vulnerabilities by 40% pre-production.',
            'Partnered with red and blue teams to enhance detection and incident response strategies.',
            'Included xR/AR/VR/MR assessments, secure code reviews across multiple languages, and vendor contract security negotiations.'
          ]
        }
      ]
    },
    {
      company: 'Amazon (Consumer Payment)',
      location: 'Arlington, VA',
      dateRange: 'June 2022 - December 2023',
      roles: [
        {
          title: 'Application Security Engineer',
          bullets: [
            'Triaged bug bounty findings and performed security assessments (code/design reviews, penetration tests) of Amazon Pay products.',
            'Led risk management for outdated third-party libraries: audited stack, identified vulnerable components, and monitored/apply updates.',
            'Assessed new payment instruments (P2P, bank debit/transfer, cash) and resolved design versus policy conflicts.',
            'Streamlined automated penetration testing framework with centralized dashboard supporting 2–3 week SLA.',
            'Introduced “Dogs Not Barking” strategy to raise secure-by-default AWS configs and RBAC permission shift proposals.',
            'Built dashboard mapping critical/high CVEs to CPEs for Amazon Pay, improving incident response and workload balancing.',
            'Assisted red team operations with tooling improvements and secure code reviews of Java applications.'
          ]
        }
      ]
    },
    {
      company: 'Comcast Corporation',
      location: 'Philadelphia, PA',
      dateRange: 'April 2021 - June 2022',
      roles: [
        {
          title: 'Senior Offensive Security Engineer',
          bullets: [
            'Partnered with development teams, product managers, and paid bug bounty programs to secure products and services.',
            'Led recruitment/community mentorship and built relationships with product leadership.',
            'Directed red team (Mean-Time-Breach) and purple team (Mean-Time-Detect) engagements.',
            'Built tools Odin, Sherlock, and Tron; advised on secure development best practices.',
            'Performed Windows/Linux platform and web app assessments; reported zero-days/issues to vendors.',
            'Completed secure code reviews across C/C++, Java, Groovy, Golang, Python, and JavaScript.'
          ]
        }
      ]
    },
    {
      company: 'Comcast Corporation',
      location: 'Philadelphia, PA',
      dateRange: 'April 2019 - March 2021',
      roles: [
        {
          title: 'Offensive Security Engineer',
          bullets: [
            'Performed network penetration tests of IoT devices and Linux/Windows servers.',
            'Completed static and dynamic security assessments of first- and third-party web applications, cloud instances, and source code.',
            'Advised developers and infrastructure teams on remediation and emerging technology recommendations.',
            'Collaborated with stakeholders to gather technical requirements, architect solutions, and deliver on commitments.',
            'Drove process improvements and departmental standards for comprehensive assessments.'
          ]
        }
      ]
    },
    {
      company: 'National Board of Medical Examiners',
      location: 'Philadelphia, PA',
      dateRange: 'May 2017 - March 2019',
      roles: [
        {
          title: 'Application Security Analyst',
          bullets: [
            'Executed STRIDE-based threat modeling and delivered technical reports.',
            'Performed web application security assessments across architectures; built automation scripts/tools.',
            'Supported risk-based vulnerability and patch management, highlighting security gaps using red/blue experience.',
            'Assisted SIEM/EDR selection and deployment; contributed to incident response and post-event analysis.',
            'Maintained corporate security policies to protect systems and data.',
            'Executed vulnerability management and patch management processes with threat intel feeds.'
          ]
        }
      ]
    },
    {
      company: 'Protiviti Inc.',
      location: 'Philadelphia, PA',
      dateRange: 'Feb 2016 - May 2017',
      roles: [
        {
          title: 'IT Security Consultant',
          bullets: [
            'Delivered PCI vulnerability management assessments with scanning and manual validation.',
            'Automated static/dynamic code analysis with manual verification for coverage.',
            'Supported red-team engagements (external/internal) including OSINT and social engineering.',
            'Improved patch management programs via interviews and assessments.',
            'Authored technical reports and executive-friendly presentations.'
          ]
        }
      ]
    },
    {
      company: "David's Bridal Inc.",
      location: 'Conshohocken, PA',
      dateRange: 'Sep 2014 - Jan 2016',
      roles: [
        {
          title: 'IT Security Administrator',
          bullets: [
            'Built and enforced network security policies and procedures while monitoring tools and vulnerability releases.',
            'Conducted gap analyses and security product acquisition plus vendor deployments.',
            'Collaborated on incidents and provided reporting to leadership.',
            'Automated PCI audits, upgrades, and UNX/NIX server hardening through scripts and tools.',
            'Led Vulnerability Management program with scanning, threat intelligence, and automated blocking.',
            'Audited standards (PCI 3.0, FISMA/NIST800, SANS CSC); reviewed new software/tech.'
          ]
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Sherlock',
      description: 'Automated web application assessment framework that expedites security testing by automating reconnaissance steps including nmap, sublist3r, and vulnerability scanning.',
      url: 'https://github.com/gbiagomba/Sherlock',
      stars: 86
    },
    {
      name: 'Security-Tools',
      description: 'Comprehensive collection of security automation scripts for IT security administration, from validating findings to performing automated attacks and assessments.',
      url: 'https://github.com/gbiagomba/Security-Tools',
      stars: 21
    },
    {
      name: 'GraveDigger',
      description: 'Linux system forensics tool that searches for files of interest, then compresses and encrypts them for secure exfiltration and analysis.',
      url: 'https://github.com/gbiagomba/GraveDigger',
      stars: 5
    },
    {
      name: 'Terminus',
      description: 'HTTP boundary testing tool that identifies access control security misconfigurations by systematically testing authorization boundaries.',
      url: 'https://github.com/gbiagomba/Terminus',
      stars: 3
    },
    {
      name: 'Hephaestus',
      description: 'Git administration automation toolkit with tools for managing multiple repositories, batch operations, and repository health monitoring.',
      url: 'https://github.com/gbiagomba/Hephaestus',
      stars: 3
    },
    {
      name: 'OWASP-Janus',
      description: 'HTTP request fuzzing tool that tests various HTTP request types and methods against web servers to identify security vulnerabilities.',
      url: 'https://github.com/gbiagomba/OWASP-Janus',
      stars: 2
    },
    {
      name: 'Threat Modeling the Death Star',
      description: 'BSides Bucharest 2024 talk applying STRIDE, DREAD, and PASTA threat modeling frameworks to fictional and real-world architectures.'
    },
    {
      name: 'AI Model Security Research',
      description: 'Research into adversarial ML attacks, model poisoning, and secure AI model deployment strategies for production systems.'
    }
  ],
  leadership: [
    'Active mentor guiding junior engineers in red teaming, penetration testing, and AI security.',
    'Public speaking (e.g., BSides Bucharest) on threat modeling AI and security automation.',
    'Diversity and inclusion champion within cybersecurity communities.',
    'Advisor to university cybersecurity clubs on curriculum and hands-on exercises.',
    'Organizer of local CTF competitions.'
  ],
  education: [
    {
      school: 'East Stroudsburg University',
      location: 'East Stroudsburg, PA',
      degree: 'B.S. in Computer Science',
      date: 'May 2014',
      notes: [
        'Concentration in Information Security',
        'Sub-focus: Network Security, Digital Forensics, Policy Writing, Information System Auditing'
      ]
    }
  ]
};

