export const projects = [
  // --- Featured ---
  {
    id: 'email-ingest',
    title: 'Email Ingest Pipeline',
    description:
      'Serverless AWS service that ingests and normalises partner alert emails into an event pipeline, feeding downstream ITSM ticketing and on-call paging.',
    tags: ['TypeScript', 'AWS CDK', 'Lambda', 'EventBridge', 'SES', 'SQS', 'DynamoDB'],
    type: 'work',
    featured: true,
    github: null,
    private: true,
  },
  {
    id: 'ai-study-assistant',
    title: 'AI Study Assistant',
    description:
      'Full-stack LLM web app that transforms course materials into summaries, flashcards, quizzes, and Q&A sessions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'Google Gemini', 'Docker'],
    type: 'school',
    featured: true,
    github: 'https://github.com/jordan-badcock/ai-study-assistant',
    private: false,
  },
  {
    id: 'pop-access-agent',
    title: 'POP Access Agent',
    description:
      'Amazon Connect call-centre with a Lex conversational bot handling inbound access agent workflows for [X]+ users across [Y] sites, provisioned entirely via CDK.',
    tags: ['TypeScript', 'AWS CDK', 'Amazon Connect', 'Amazon Lex', 'Lambda'],
    type: 'work',
    featured: true,
    github: null,
    private: true,
  },
  {
    id: 'ai-kiosk',
    title: 'Emerging Trends AI Kiosk',
    description:
      'Voice-driven AI kiosk for the College of the North Atlantic running a fully local LLM pipeline — no cloud required.',
    tags: ['Python', 'FastAPI', 'Ollama', 'Mistral', 'Whisper', 'TTS', 'OpenCV'],
    type: 'school',
    featured: true,
    github: 'https://github.com/Exospherical/CP4220-FinalProject',
    private: false,
  },

  // --- Secondary ---
  {
    id: 'deep-learning',
    title: 'Medical Image Classification',
    description:
      'ResNet-based multi-class medical image classifier with SHAP and LIME explainability to interpret model decisions on diagnostic imaging.',
    tags: ['Python', 'PyTorch', 'ResNet', 'SHAP', 'LIME'],
    type: 'school',
    featured: false,
    github: 'https://github.com/jordan-badcock/medical_image_classification',
    private: false,
  },
  {
    id: 'nlp',
    title: 'NLP & Resume Screener',
    description:
      'NLP coursework including hidden Markov models and a resume screening app using TF-IDF with Naive Bayes, SVM, and logistic regression.',
    tags: ['Python', 'spaCy', 'scikit-learn', 'NLTK'],
    type: 'school',
    featured: false,
    github: 'https://github.com/jordan-badcock/resume_screening_nlp',
    private: false,
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Document Scanner',
    description:
      'Image segmentation, edge detection, and a document scanner using Canny edge detection and perspective transforms.',
    tags: ['Python', 'OpenCV', 'NumPy', 'PyTorch'],
    type: 'school',
    featured: false,
    github: 'https://github.com/jordan-badcock/docscan_project',
    private: false,
  },
  {
    id: 'har-wearable',
    title: 'HAR Wearable Sensors',
    description:
      'Temporal Fusion Transformer for human activity recognition from smartphone IMU data, with federated learning baselines and SHAP axis attribution — 89% accuracy across three public datasets.',
    tags: ['Python', 'PyTorch', 'TFT', 'Federated Learning', 'SHAP', 'Gradio'],
    type: 'school',
    featured: false,
    github: 'https://github.com/jordan-badcock/har-wearable-sensors',
    private: false,
  },
  {
    id: 'nocland-devops',
    title: 'Cloud Infrastructure Automation',
    description:
      'Ansible playbook library for full infrastructure automation — NMS, ITSM, MongoDB, and AWS EC2/S3/VPC lifecycle management.',
    tags: ['Ansible', 'Python', 'AWS', 'EC2', 'S3', 'CloudWatch'],
    type: 'work',
    featured: false,
    github: null,
    private: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const secondaryProjects = projects.filter((p) => !p.featured)


