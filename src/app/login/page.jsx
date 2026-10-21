import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Sign in — FliksLingo',
  description: 'Sign in to your FliksLingo account to continue learning.',
};

export default function LoginPage() {
  return <AuthForm initialMode="login" />;
}
