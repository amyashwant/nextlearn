import React from "react";
import { useRouter } from "next/router";
const courseOne = () => {
  const router = useRouter();
  //   const { id } = router;
  return <div>this is the next js course {router.query.id}</div>;
};

export default courseOne;
