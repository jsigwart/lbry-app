import React from "react";
import { connect } from "react-redux";
import InviteNew from "./view";
import {
  selectUserInvitesRemaining,
  selectUserInviteNewIsPending,
  selectUserInviteNewErrorMessage,
} from "redux/selectors/user";
import rewards from "rewards";
import { makeSelectRewardAmountByType } from "redux/selectors/rewards";

import { doUserInviteNew } from "redux/actions/user";

const select = state => {
  const selectReward = makeSelectRewardAmountByType();

  return {
    errorMessage: selectUserInviteNewErrorMessage(state),
    invitesRemaining: selectUserInvitesRemaining(state),
    isPending: selectUserInviteNewIsPending(state),
    rewardAmount: selectReward(state, { reward_type: rewards.TYPE_REFERRAL }),
  };
};

const perform = dispatch => ({
  inviteNew: email => dispatch(doUserInviteNew(email)),
});

export default connect(select, perform)(InviteNew);
