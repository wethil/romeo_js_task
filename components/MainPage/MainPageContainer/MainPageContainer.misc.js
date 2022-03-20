import React from "react";
import Box from "components/common/Box/Box";
import Text from "components/common/Text/Text";
import LoadingIcon from "components/common/Icons/LoadingIcon";

const MessageLabelModule = ({ message }) => (
  <Text textAlign="center" fontSize="middle" color="white">
    {message}
  </Text>
);

const LoadingModule = () => (
  <Box mt="middle">
    <LoadingIcon />
  </Box>
);

export const MessageLabel = React.memo(MessageLabelModule);
export const Loading = React.memo(LoadingModule);
