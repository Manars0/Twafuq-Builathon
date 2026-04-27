import { createBrowserRouter, Navigate } from 'react-router';
import { EntryScreen } from './components/EntryScreen';
import { StudentLogin } from './components/student/StudentLogin';
import { ProfileSetup } from './components/student/ProfileSetup';
import { LinkedInImport } from './components/student/LinkedInImport';
import { CVUpload } from './components/student/CVUpload';
import { ManualInput } from './components/student/ManualInput';
import { ProfileReview } from './components/student/ProfileReview';
import { StudentLayout } from './components/student/StudentLayout';
import { StudentDashboard } from './components/student/StudentDashboard';
import { Opportunities } from './components/student/Opportunities';
import { OpportunityDetails } from './components/student/OpportunityDetails';
import { Applications } from './components/student/Applications';
import { StudentNotifications } from './components/student/StudentNotifications';
import { StudentProfile } from './components/student/StudentProfile';
import { CompanySignup } from './components/company/CompanySignup';
import { CompanyLayout } from './components/company/CompanyLayout';
import { CompanyDashboard } from './components/company/CompanyDashboard';
import { CreateOpportunity } from './components/company/CreateOpportunity';
import { EditOpportunity } from './components/company/EditOpportunity';
import { ManageOpportunities } from './components/company/ManageOpportunities';
import { CandidatesMatching } from './components/company/CandidatesMatching';
import { CandidateDetails } from './components/company/CandidateDetails';
import { CompanyNotifications } from './components/company/CompanyNotifications';
import { Billing } from './components/company/Billing';

const StudentRedirect = () => <Navigate to="/student/dashboard" replace />;
const CompanyRedirect = () => <Navigate to="/company/dashboard" replace />;
const NotFound = () => <Navigate to="/" replace />;

export const router = createBrowserRouter([
  { path: '/', Component: EntryScreen },

  // Student onboarding flow
  { path: '/student/login', Component: StudentLogin },
  { path: '/student/setup', Component: ProfileSetup },
  { path: '/student/linkedin', Component: LinkedInImport },
  { path: '/student/cv-upload', Component: CVUpload },
  { path: '/student/manual', Component: ManualInput },
  { path: '/student/review', Component: ProfileReview },

  // Student app (with sidebar layout)
  {
    path: '/student',
    Component: StudentLayout,
    children: [
      { index: true, Component: StudentRedirect },
      { path: 'dashboard', Component: StudentDashboard },
      { path: 'opportunities', Component: Opportunities },
      { path: 'opportunities/:id', Component: OpportunityDetails },
      { path: 'applications', Component: Applications },
      { path: 'notifications', Component: StudentNotifications },
      { path: 'profile', Component: StudentProfile },
    ],
  },

  // Company onboarding flow
  { path: '/company/signup', Component: CompanySignup },

  // Company app (with sidebar layout)
  {
    path: '/company',
    Component: CompanyLayout,
    children: [
      { index: true, Component: CompanyRedirect },
      { path: 'dashboard', Component: CompanyDashboard },
      { path: 'create', Component: CreateOpportunity },
      { path: 'edit/:id', Component: EditOpportunity },
      { path: 'opportunities', Component: ManageOpportunities },
      { path: 'candidates', Component: CandidatesMatching },
      { path: 'candidates/:id', Component: CandidateDetails },
      { path: 'notifications', Component: CompanyNotifications },
      { path: 'billing', Component: Billing },
    ],
  },

  // Catch-all
  { path: '*', Component: NotFound },
]);