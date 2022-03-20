import React from "react";
import Image from "next/image";
import Box, { Flex } from "components/common/Box/Box";
import LocationMarkerIcon from "@/components/common/Icons/LocationMarkerIcon";
import Text from "components/common/Text/Text";
import EmptyAvatar from "public/images/empty_avatar_image.jpeg";
import { ONLINE, OFFLINE, DATE } from "constants/constants";
import { blurImageURI } from "./ProfileCard.misc";
import PropTypes from "prop-types";

import Status from "./Status.js";

import styled from "styled-components";

const ImageWrapper = styled(Box)`
  & > span {
    display: block !important;
  }
`;

export default function ProfileCard({
  name,
  online_status,
  picture,
  headline,
  last_login,
  location,
  personal,
}) {
  return (
    <Flex
      mt="small"
      pb="small"
      bg="background"
      flexDirection="column"
      minHeight={480}
      height="auto"
    >
      <ImageWrapper position="relative">
        <Image
          placeholder="blur" // Using blurring filter while image is lazyloading
          blurDataURL={blurImageURI}
          src={picture.url || EmptyAvatar}
          alt={picture.comment}
          width="100%"
          height={250}
          objectFit="cover"
        />
      </ImageWrapper>
      <Flex color="white" px="mini" flexDirection="column">
        <Flex
          fontSize="middle"
          flexDirection="row"
          alignItems="center"
          mt="mini"
        >
          {personal?.age} | {name}
        </Flex>
        <Status last_login={last_login} online_status={online_status} />
        <Flex flexDirection="row" alignItems="center" color="white">
          <LocationMarkerIcon width={13} height={13} />{" "}
          <Text ml="mini" fontSize="mini">
            {location.distance} km / {location.name}
          </Text>
        </Flex>
        <Text fontSize="mini" mt="middle" fontStyle="italic">
          `{headline}`
        </Text>
      </Flex>
    </Flex>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  online_status: PropTypes.string.isRequired,
  last_login: PropTypes.string.isRequired,
  online_status: PropTypes.oneOf([ONLINE, OFFLINE, DATE]).isRequired,
  location: PropTypes.shape({
    distance: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  picture: PropTypes.shape({
    comment: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  personal: PropTypes.shape({
    age: PropTypes.number,
  }).isRequired,
};

ProfileCard.defaultProps = {
  picture: {
    comment: "",
    url: "",
  },
};
