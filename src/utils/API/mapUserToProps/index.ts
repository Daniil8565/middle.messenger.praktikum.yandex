import { Indexed } from "../store";

export default function mapUserToProps(
  state: Indexed
): Record<string, unknown> {
  return {
    avatar: state?.user?.avatar,
    email: state?.user?.email,
    login: state?.user?.login,
    first_name: state?.user?.first_name,
    second_name: state?.user?.second_name,
    display_name: state?.user?.display_name,
    phone: state?.user?.phone,
  };
}
