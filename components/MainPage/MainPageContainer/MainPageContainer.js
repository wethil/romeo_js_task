import React, { useEffect, useState } from "react";
import { useSearchMembersByFilterQuery } from "api/membersApi";
import { Container, Row, Col } from "styled-bootstrap-grid";
import InfiniteScroll from "react-infinite-scroll-component";

import ProfileCard from "components/MainPage/ProfileCard/ProfileCard";

export default function MainPageContainer() {
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  const [query, setQuery] = useState({
    sorting: "DISTANCE",
    cursor: null,
  });
  const [hasReachEnd, setHasReachEnd] = useState(false);

  const { data, isLoading } = useSearchMembersByFilterQuery(query);
  console.log(data, isLoading, "daata");

  useEffect(() => {
    if (data?.items?.length) {
      const newItems = [...items, ...data.items];
      setItems(newItems);
      setNextCursor(data.cursors?.after);
      if (newItems.length === data.total) {
        setHasReachEnd(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) return <div> is Loading </div>;

  return (
    <Container>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={() => {
          console.log("FEET");
          setQuery((state) => ({
            ...state,
            cursor: nextCursor,
          }));
        }}
        hasMore={!hasReachEnd}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={() => console.log("refresgh")}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        <Row>
          {items.map((item) => (
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
      </InfiniteScroll>
    </Container>
  );
}
