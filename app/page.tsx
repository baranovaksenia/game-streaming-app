import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      only authenticated users can see this page
    </div>
  );
}
