import AuthForm from '../../components/AuthForm';

export const metadata = {
  title: 'Reset Password — FliksLingo',
  description: 'Reset your FliksLingo account password with a secure reset link.',
};

export default function ResetPasswordPage() {
  return <AuthForm initialMode="forgot" />;
}
