import { Auth } from "@/components/common/Auth";

export interface AuthPageProps {}

const AuthPage = (props: AuthPageProps) => {
  return (
    <div className="p-4">
      <Auth />
    </div>
  );
};

export default AuthPage;
