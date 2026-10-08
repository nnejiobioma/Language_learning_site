import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Create your account — FiksLingo',
  description: 'Create a free FiksLingo account to start learning 12 world languages.',
};

export default function SignupPage() {
  return <AuthForm initialMode="signup" />;
}
