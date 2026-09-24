/* ------------------------------------------------------------------
   projects.js — the only file you edit.
   track: "ml" | "ops" | "both"   ("both" shows under either filter)

   Metrics below come from your own CV. No institution names on the
   academic work, per your instruction.
   ------------------------------------------------------------------ */

window.PROJECTS = [

  {
    title: "Evaluating anomaly detection algorithms under class imbalance",
    track: "ml",
    result: "95% detection accuracy · peer-reviewed, published at IJCNN 2024",
    body: "Research-assistant work benchmarking anomaly detection algorithms as class balance shifts. Built the evaluation harness in PyOD and scored every model across ROC, PR AUC, MCC, Cohen's Kappa and F1 rather than a single headline metric — because which algorithm wins depends entirely on which metric you trust when the positive class is rare.",
    stack: ["Python", "PyOD", "scikit-learn", "ROC / PR AUC", "MCC", "F1"],
    links: [{ label: "Repository", url: "https://github.com/msakhawath/Research-and-Publication" }]
  },

  {
    title: "Active Directory lifecycle toolkit for German Mittelstand",
    track: "ops",
    result: "Full joiner–mover–leaver automation on a strict AGDLP model, with DSGVO-ready audit trails",
    body: "PowerShell tooling for companies without a dedicated IAM team: user provisioning, group membership and deprovisioning built on proper AGDLP nesting rather than ad-hoc direct permissions, with audit logging structured to support DSGVO documentation duties. Written out of the same problem I handled day to day as a systems administrator — who had access to what, and when.",
    stack: ["PowerShell", "Active Directory", "AGDLP", "DSGVO", "Windows Server"],
    links: [{ label: "Code", url: "https://github.com/msakhawath/mittelstand-ad-toolkit" }]
  },

  {
    title: "Multi-agent SLM system for human–robot interview turn-taking",
    track: "both",
    result: "M.Sc. thesis — submitted, defence pending",
    body: "A multi-agent architecture on small language models that decides when a social robot should speak, listen or yield during an interview. Built and evaluated on the Furhat platform, with the agent graph designed so models small enough to run on local hardware still sustain a coherent exchange. I built the orchestration, the evaluation harness and the environment it runs in.",
    stack: ["Python", "LangGraph", "Small Language Models", "Furhat", "Docker"],
    links: [
      { label: "Implementation", url: "https://github.com/msakhawath/Multi_Agent_Furhat_robot_interview" },
      { label: "Thesis", url: "https://github.com/msakhawath/Master-s-thesis" }
    ]
  },

  {
    title: "Self-hosted job-application pipeline",
    track: "both",
    result: "Two chained workflows running unattended on infrastructure I provision and maintain",
    body: "An n8n automation on my own Linux server: one workflow ingests and normalises postings, a second drafts and tracks tailored applications. Self-hosted end to end — deployment, containerisation, monitoring and patching included, not just the automation logic.",
    stack: ["n8n", "Docker", "Linux", "LLM APIs", "Git"],
    links: []
  },

  {
    title: "Applied statistics case studies",
    track: "ml",
    result: "Three completed studies — descriptive analysis, hypothesis testing and regression",
    body: "A set of statistical case studies carried out during a research internship in a university statistics faculty, each delivered as a full analysis and written report in R.",
    stack: ["R", "Regression", "Hypothesis testing", "Reporting"],
    links: [{ label: "Code", url: "https://github.com/msakhawath/Data-Analysis-Intern" }]
  },

  {
    title: "LangGraph travel planning agent",
    track: "ml",
    result: "Stateful agent graph — holds context across multi-step tool calls instead of re-prompting",
    body: "A planning agent built on LangGraph that decomposes a trip request, calls tools in sequence and carries state through the run. Built to explore where graph-based orchestration holds up better than a single long prompt.",
    stack: ["Python", "LangGraph", "LLM APIs"],
    links: [{ label: "Code", url: "https://github.com/msakhawath/langgraph-travel-agent" }]
  },

  {
    title: "Berlin EV charging infrastructure analysis",
    track: "ml",
    result: "District-level coverage mapping of charging capacity against demand",
    body: "Geospatial analysis of electric-vehicle charging provision across Berlin, mapping station density against demand indicators to surface where coverage thins out.",
    stack: ["Python", "Geospatial", "Pandas", "Visualisation"],
    links: [{ label: "Code", url: "https://github.com/msakhawath/berlin-ev-heatmap" }]
  }

];
