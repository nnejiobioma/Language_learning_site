import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Sign in — FiksLingo',
  description: 'Sign in to your FiksLingo account to continue learning.',
};

export default function LoginPage() {
  return <AuthForm initialMode="login" />;
}
