import React from "react";
import { useRouter } from "next/router";
const Imageid = () => {
  const router = useRouter();
  const { blog_slug, image_id } = router.query;
  return (
    <div>
      this is {blog_slug} blog and image id is {image_id}
    </div>
  );
};

export default Imageid;
