import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  const setOfflineStatus = function () {
    setOnlineStatus(false);
  };

  const setOnlineStatus_ = function () {
    setOnlineStatus(true);
  };

  useEffect(() => {
    window.addEventListener("online", setOnlineStatus_);
    window.addEventListener("offline", setOfflineStatus);
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
