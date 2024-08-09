import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";

interface CardWrapperProps {
  headerTitle: string;
  headerSubtitle: string;
  footerLabel: string;
  footerAction: {
    label: string;
    href: string;
  };
  children?: React.ReactNode;
}

export const CardWrapper = ({
  headerTitle,
  headerSubtitle,
  footerLabel,
  footerAction,
  children,
}: CardWrapperProps) => {
  return (
    <div className="w-[375px] shadow-md rounded-sm min-h-fit flex flex-col py-5 px-10">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="size-10 mb-5" />
        <h1 className="text-3xl font-bold text-zinc-900 mb-3">{headerTitle}</h1>
        <h4 className="text-sm font-normal text-zinc-500 mb-8">
          {headerSubtitle}
        </h4>
      </div>

      {children}

      <footer className="flex mb-3">
        <p className="text-sm font-bold text-zinc-900">{footerLabel}</p>
        <Link
          to={footerAction.href}
          className="text-blue-400 text-sm font-semibold ml-2 hover:underline"
        >
          {footerAction.label}
        </Link>
      </footer>
    </div>
  );
};
