import { hash } from "bcryptjs";

const hashPassword = async (password) => {
  // password = ali1212 => Hash => dngsbipnrg9ipbn39ubnj9unertn
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export { hashPassword };
