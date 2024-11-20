import { Indexed } from "../store";

export default function mapUserToProps(
  state: Indexed
): Record<string, unknown> {
  console.log("mapUserToProps", state?.user);
  console.log("mapUserToProps", state?.user?.email);
  return {
    email: state?.user?.email,
  };
}
