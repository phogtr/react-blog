import React from "react";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="email" />
      </div>
      <div>
        <input type="text" placeholder="password" />
      </div>
    </form>
  );
};
