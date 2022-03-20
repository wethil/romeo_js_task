import React from "react";
import Image from "next/image";
import { Flex } from "components/common/Box/Box";
import PropTypes from "prop-types";

export default function ProfileCard({
  id,
  name,
  online_status = "o",
  is_plus = false,
  picture,
  // last_login,
}) {
  console.log(picture.url, "pic");
  return (
    <Flex id={id} flexDirection="column" maxHeight={300}>
      {picture.url && (
        <Image
          src={picture.url}
          alt={picture.comment}
          width={200}
          height={200}
        />
      )}
      <Flex flexDirection="row">
        <Flex flexDirection="row">
          {name} | {online_status} | {is_plus}
        </Flex>
      </Flex>
    </Flex>
  );
}

ProfileCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online_status: PropTypes.string.isRequired,
  is_plus: PropTypes.bool.isRequired,
  picture: PropTypes.exact({
    comment: PropTypes.string,
    url: PropTypes.string,
  }),
  // last_login: PropTypes.string.isRequired,
};

ProfileCard.defaultProps = {
  picture: {
    comment: "",
    url: "",
  },
};
