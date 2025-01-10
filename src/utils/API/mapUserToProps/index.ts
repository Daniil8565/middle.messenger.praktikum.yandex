import { Indexed } from "../store.ts";

export default function mapUserToProps(
  state: Indexed
): Record<string, unknown> {
  return {
    avatar: state?.userName?.avatar,
    email: state?.userName?.email,
    login: state?.userName?.login,
    first_name: state?.userName?.first_name,
    second_name: state?.userName?.second_name,
    display_name: state?.userName?.display_name,
    phone: state?.userName?.phone,
  };
}
