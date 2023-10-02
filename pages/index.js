import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  router.push("/to-do");
};

export default HomePage;
