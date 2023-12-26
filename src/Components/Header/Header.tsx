import { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../../Redux/Action";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

interface user {
  errmessage: string;
  loading: boolean;
  userlist: [];
  userobj: object;
}

interface State {
  user: user;
}

const mapStateToProps = (state: { user: user }) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, undefined, Action>
) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code: string) => dispatch(Removeuser(code)),
  };
};

const Header = (props: {
    user: user; loaduser: () => void; removeuser: (arg0: string) => void; 
}) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  
  const handledelete = (code: string) => {
    if (window.confirm("Do you want to remove?")) {
      props.removeuser(code);
      props.loaduser();
      toast.success("User removed successfully.");
    }
  };

  return (
    <div>
        {props.user.loading ? <div>Loading</div>: props.user.errmessage ? <div>{props.user.errmessage}</div> : null}                        
    </div>
  );
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default ConnectedHeader;
