import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-3xl">Hello World</p>
      <Button>Click here</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
