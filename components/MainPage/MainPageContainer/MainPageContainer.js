import React, { useEffect, useState } from "react";
import { useSearchMembersByFilterQuery } from "api/membersApi";
import { Container, Row, Col } from "styled-bootstrap-grid";
import InfiniteScroll from "react-infinite-scroll-component";
import ProfileCard from "components/MainPage/ProfileCard/ProfileCard";
import { Flex } from "components/common/Box/Box";
import Button from "components/common/Button/Button";
import { DISTANCE, ACTIVITY } from "constants/constants";

import { MessageLabel, Loading } from "./MainPageContainer.misc";

export default function MainPageContainer() {
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  const [query, setQuery] = useState({
    sorting: DISTANCE,
    cursor: null,
  });
  const [hasReachEnd, setHasReachEnd] = useState(false);

  const { data, isLoading } = useSearchMembersByFilterQuery(query, {
    skip: hasReachEnd, // The parameter that prevent us unnecessary API calls
  });

  useEffect(() => {
    if (data?.items?.length) {
      const newItems = [...items, ...data.items]; // Concat previous items with new items coming from scolling
      setItems(newItems);
      setNextCursor(data.cursors?.after);
      if (newItems.length === data.total) {
        setHasReachEnd(true); // With this state, we stop requesting after we reach total member count
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) return <Loading />;

  const handleFilterChange = (filter) => {
    if (filter !== query.sorting) {
      setItems([]);
      setNextCursor(null);
      setQuery({
        // On every change of _query_ state, 'useSearchMembersByFilterQuery' is triggering and fetching data from server
        sorting: filter,
        cursor: null,
      });
    }
  };

  const handleRefresh = () => {
    setItems([]);
    setQuery({
      sorting: query.sorting,
      cursor: null,
    });
  };
  return (
    <Container>
      <Flex pt="middle" position="sticky" top="0" zIndex="2" bg="primary_500">
        <Button
          onClick={() => handleFilterChange(DISTANCE)}
          active
          tabIndex={0}
          role="button"
          variant="link"
        >
          DISTANCE
        </Button>
        <Button
          onClick={() => handleFilterChange(ACTIVITY)}
          tabIndex={0}
          role="button"
          variant="link"
        >
          ACTIVITY
        </Button>
      </Flex>
      <Row>
        <Col></Col>
      </Row>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={() => {
          setQuery((state) => ({
            ...state,
            cursor: nextCursor,
          }));
        }}
        style={{ overflowX: "hidden" }}
        hasMore={!hasReachEnd}
        loader={<Loading />}
        endMessage={<MessageLabel message="You've seen all the members" />}
        refreshFunction={handleRefresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <MessageLabel message="Pull down to refresh" />
        }
        releaseToRefreshContent={<MessageLabel message="Release to refresh" />}
      >
        <Row>
          {items.map((item) => (
            <Col xl={3} md={4} sm={12} key={item.id}>
              <ProfileCard
                name={item.name}
                online_status={item.online_status}
                picture={item.picture}
                headline={item.headline}
                last_login={item.last_login}
                location={item.location}
                personal={item.personal}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
