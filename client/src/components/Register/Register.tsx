interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="name" />
      </div>
      <div>
        <input type="text" placeholder="email" />
      </div>
      <div>
        <input type="text" placeholder="password" />
      </div>
    </form>
  );
};
