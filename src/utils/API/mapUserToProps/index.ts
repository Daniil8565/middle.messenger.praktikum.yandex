import { Indexed } from "../store";

export default function mapUserToProps(state: Indexed) {
  return {
    name: state.user,
  };
}
