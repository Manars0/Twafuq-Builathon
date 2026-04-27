export interface Opportunity {
  id: number;
  company: string;
  logo: string;
  position: string;
  match: number;
  location: string;
  type: string;
  skills: string[];
  description: string;
  requirements: string[];
  duration: string;
  salary: string;
  applicants: number;
}

export interface Application {
  id: number;
  company: string;
  logo: string;
  position: string;
  date: string;
  status: 'accepted' | 'rejected' | 'pending';
  match: number;
}

export interface Candidate {
  id: number;
  name: string;
  university: string;
  major: string;
  match: number;
  skills: string[];
  gpa: string;
  strengths: string[];
  experience: string;
  email: string;
}

export interface CompanyOpportunity {
  id: number;
  title: string;
  skills: string[];
  applicants: number;
  status: 'active' | 'closed' | 'draft';
  date: string;
  views: number;
}

export const opportunities: Opportunity[] = [
  {
    id: 1,
    company: 'Saudi Aramco',
    logo: '🛢️',
    position: 'Web Developer',
    match: 94,
    location: 'Riyadh',
    type: 'Co-op',
    skills: ['React', 'Node.js', 'Python', 'SQL'],
    description: 'We are looking for a talented web developer to join our technical team at Saudi Aramco. You will work on developing and maintaining critical web applications that support company operations.',
    requirements: ['Third or fourth year student', 'GPA not less than 3.5', 'Proficiency in English'],
    duration: '3 months',
    salary: '3000 SAR/month',
    applicants: 48,
  },
  {
    id: 2,
    company: 'STC',
    logo: '📡',
    position: 'UX Designer',
    match: 87,
    location: 'Jeddah',
    type: 'Co-op',
    skills: ['Figma', 'UX Research', 'Prototyping'],
    description: 'Looking for a user experience designer to design mobile application interfaces and improve customer experience in our digital products.',
    requirements: ['Student in design major or equivalent', 'GPA 3.0 or higher', 'Portfolio of work'],
    duration: '6 months',
    salary: '3500 SAR/month',
    applicants: 31,
  },
  {
    id: 3,
    company: 'Alibaba Saudi Arabia',
    logo: '🛒',
    position: 'Data Analyst',
    match: 82,
    location: 'Riyadh',
    type: 'Summer',
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'SQL'],
    description: 'Opportunity to join the data analysis team to analyze user data and improve product recommendations.',
    requirements: ['Computer science or statistics major', 'Experience with Python', 'Passion for data'],
    duration: '3 months',
    salary: '2800 SAR/month',
    applicants: 62,
  },
  {
    id: 4,
    company: 'Mobily',
    logo: '📱',
    position: 'Mobile App Developer',
    match: 78,
    location: 'Riyadh',
    type: 'Co-op  ',
    skills: ['React Native', 'iOS', 'Android', 'Flutter'],
    description: 'Looking for a obile app developer to support our team in developing next-generation applications.',
    requirements: ['Software engineering major', 'Experience in Flutter or React Native', 'Interest in mobile development'],
    duration: '4 months',
    salary: '3200 SAR/month',
    applicants: 27,
  },
  {
    id: 5,
    company: 'Al Rajhi Bank',
    logo: '🏦',
    position: 'Information Security Analyst',
    match: 71,
    location: 'Dammam',
    type: 'Summer',
    skills: ['Cybersecurity', 'Network Security', 'Ethical Hacking'],
    description: 'Internship in cybersecurity to learn about practices for protecting financial systems.',
    requirements: ['Information security major or equivalent', 'CompTIA certifications a plus', 'Ethical conduct'],
    duration: '6 months',
    salary: '4000 SAR/month',
    applicants: 19,
  },
  {
    id: 6,
    company: 'NEOM',
    logo: '🏙️',
    position: 'AI Engineer',
    match: 65,
    location: 'Tabuk',
    type: 'Co-op',
    skills: ['TensorFlow', 'Computer Vision', 'NLP', 'Python'],
    description: 'Join the city of the future and contribute to building artificial intelligence systems that will shape urban life.',
    requirements: ['Masters degree preferred', 'Experience in Deep Learning', 'Interest in future cities'],
    duration: '6 months',
    salary: '5000 SAR/month',
    applicants: 89,
  },
];

export const applications: Application[] = [
  { id: 1, company: 'Saudi Aramco', logo: '🛢️', position: 'Web Developer', date: '2024-01-15', status: 'accepted', match: 94 },
  { id: 2, company: 'STC', logo: '📡', position: 'UX Designer', date: '2024-01-10', status: 'pending', match: 87 },
  { id: 3, company: 'Mobily', logo: '📱', position: 'Mobile App Developer', date: '2024-01-05', status: 'rejected', match: 78 },
  { id: 4, company: 'Al Rajhi Bank', logo: '🏦', position: 'Information Security Analyst', date: '2023-12-28', status: 'pending', match: 71 },
  { id: 5, company: 'NEOM', logo: '🏙️', position: 'AI Engineer', date: '2023-12-20', status: 'accepted', match: 65 },
];

export const candidates: Candidate[] = [
  {
    id: 1,
    name: 'Ahmed Mohammed Al-Shehri',
    university: 'King Abdullah University of Science and Technology',
    major: 'Software Engineering',
    match: 97,
    skills: ['Python', 'React', 'Node.js', 'SQL', 'Machine Learning'],
    gpa: '4.8 / 5.0',
    strengths: ['Excellent practical experience', 'Leadership skills', 'Open source projects'],
    experience: '1 year',
    email: 'ahmed@student.kaust.edu.sa',
  },
  {
    id: 2,
    name: 'Sarah Abdullah Al-Qurashi',
    university: 'King Fahd University of Petroleum and Minerals',
    major: 'Computer Science',
    match: 91,
    skills: ['Python', 'Data Science', 'TensorFlow', 'SQL'],
    gpa: '4.6 / 5.0',
    strengths: ['Advanced data analysis', 'Published research', 'Machine learning'],
    experience: '6 months',
    email: 'sara@student.kfupm.edu.sa',
  },
  {
    id: 3,
    name: 'Khalid Omar Al-Bassami',
    university: 'King Saud University',
    major: 'Computer Engineering',
    match: 85,
    skills: ['React', 'TypeScript', 'AWS', 'Docker'],
    gpa: '4.4 / 5.0',
    strengths: ['Cloud Computing', 'Modern web development', 'DevOps'],
    experience: '8 months',
    email: 'khalid@stu.ksu.edu.sa',
  },
  {
    id: 4,
    name: 'Noura Fahad Al-Zahrani',
    university: 'Princess Nourah Bint Abdulrahman University',
    major: 'Information Technology',
    match: 79,
    skills: ['UI/UX Design', 'Figma', 'HTML/CSS', 'JavaScript'],
    gpa: '4.3 / 5.0',
    strengths: ['Creative design', 'User experience', 'Prototyping'],
    experience: '4 months',
    email: 'noura@student.pnu.edu.sa',
  },
  {
    id: 5,
    name: 'Omar Salman Al-Dosari',
    university: 'King Abdulaziz University',
    major: 'Information Security',
    match: 72,
    skills: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Python'],
    gpa: '4.1 / 5.0',
    strengths: ['Penetration testing', 'Vulnerability analysis', 'CEH certification'],
    experience: 'None',
    email: 'omar@student.kau.edu.sa',
  },
];

export const companyOpportunities: CompanyOpportunity[] = [
  { id: 1, title: 'Web Developer', skills: ['React', 'Node.js', 'Python'], applicants: 48, status: 'active', date: '2024-01-01', views: 312 },
  { id: 2, title: 'UX Designer', skills: ['Figma', 'UX Research'], applicants: 31, status: 'active', date: '2024-01-05', views: 215 },
  { id: 3, title: 'Data Analyst', skills: ['Python', 'SQL', 'Power BI'], applicants: 22, status: 'closed', date: '2023-12-15', views: 178 },
  { id: 4, title: 'DevOps Engineer', skills: ['Docker', 'Kubernetes', 'AWS'], applicants: 15, status: 'draft', date: '2024-01-10', views: 0 },
];

export const notifications = [
  { id: 1, type: 'match', message: 'Found 3 new opportunities that match your profile', time: '1 hour ago', read: false },
  { id: 2, type: 'accepted', message: 'Congratulations! Your application at Saudi Aramco has been accepted', time: '3 hours ago', read: false },
  { id: 3, type: 'view', message: 'STC viewed your profile', time: '1 day ago', read: true },
  { id: 4, type: 'reminder', message: 'Your profile is 80% complete, finish the rest to improve your chances', time: '2 days ago', read: true },
  { id: 5, type: 'rejected', message: 'Unfortunately, your application at Mobily was rejected', time: '3 days ago', read: true },
];

export const companyNotifications = [
  { id: 1, type: 'candidate', message: '5 new candidates applied for Web Developer position', time: '1 hour ago', read: false },
  { id: 2, type: 'match', message: 'AI found 3 excellent candidates for UX Designer position', time: '3 hours ago', read: false },
  { id: 3, type: 'profile', message: 'Ahmed Al-Shehri accepted the initial interview', time: '1 day ago', read: true },
  { id: 4, type: 'billing', message: 'Monthly subscription renewal: January 15, 2024', time: '3 days ago', read: true },
];
