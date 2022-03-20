import React from "react";
import { useSearchMembersByFilterQuery } from "api/membersApi";
import { Container, Row, Col } from "styled-bootstrap-grid";
import ProfileCard from "components/MainPage/ProfileCard/ProfileCard";

export default function MainPageContainer() {
  const { data, isLoading } = useSearchMembersByFilterQuery();
  console.log(data, isLoading, "daata");

  if (isLoading) return <div> is Loading </div>;

  return (
    <Container>
      <Row>
        {data.items.length &&
          data.items.map((item) => (
            <Col md={3} key={item.id}>
              <ProfileCard
                name={item.name}
                online_status={item.online_status}
                is_plus={item.is_plus}
                picture={item.picture}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
