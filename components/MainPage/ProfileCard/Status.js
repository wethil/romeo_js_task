import React from "react";
import ago from "s-ago";
import PropTypes from "prop-types";
import Box, { Flex } from "components/common/Box/Box";
import ClockMarketIcon from "components/common/Icons/ClockIcon";
import { ONLINE, OFFLINE, DATE } from "constants/constants";

import Text from "components/common/Text/Text";

export default function Status({ online_status, last_login }) {
  const isOnline = online_status === "ONLINE";

  const isoAsLastLogin = new Date(last_login);
  return (
    <Flex flexDirection="row" alignItems="center">
      {isOnline ? (
        <Box width={20} height={20} borderRadius="50%" bg="success_700"></Box>
      ) : (
        <ClockMarketIcon width={20} height={20} />
      )}
      <Text fontSize="tiny" ml="mini">
        {isOnline ? "Recently Online" : ago(isoAsLastLogin)}{" "}
      </Text>
    </Flex>
  );
}

Status.propTypes = {
  online_status: PropTypes.oneOf([ONLINE, OFFLINE, DATE]).isRequired,
  last_login: PropTypes.string.isRequired,
};
