import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Forgot Password — FliksLingo',
  description: 'Request a password reset link for your FliksLingo account.',
};

export default function ForgotPasswordPage() {
  return <AuthForm initialMode="forgot" />;
}
