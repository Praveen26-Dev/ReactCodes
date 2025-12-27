import { useEffect, useRef } from "react";
import { pageEnterAnimation } from "../animations/pageAnimations";

const Profile = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    pageEnterAnimation(pageRef.current);
  }, []);

  return <div ref={pageRef}>Profile Page</div>;
};

export default Profile