import styled from "styled-components";
import { useState } from "react";
import { useGetLiveList } from "../../../Hook/useGetLiveList";
import Spinner from "../../../Components/Common/Spinner";
import Utils from "../../../Utils/Utils";

const ListContainer = styled.div``;

const List = styled.div`
  display: flex;
  padding: 10px;
  p {
    margin: 0 50px;
  }
`;

const Button = styled.button`
  margin: 10px;
`;

const liveArr = [
  "2021-12-18",
  "2021-12-19",
  "2021-12-20",
  "2021-12-21",
  "2021-12-22",
  "2021-12-23",
  "2021-12-24",
  "2021-12-25",
];

const LiveList = () => {
  const toDay = Utils.getToday("-");
  const [liveDate, setLiveDate] = useState<string>(
    liveArr.filter((date) => date === toDay)[0]
      ? liveArr.filter((date) => date === toDay)[0]
      : "2021-12-18"
  );
  const { data, isLoading, isError } = useGetLiveList(liveDate);
  return (
    <div>
      {liveArr.map((date) => (
        <Button key={date} onClick={() => setLiveDate(date)}>
          {Utils.getFormatStrDate(date, ".", false)}
        </Button>
      ))}
      <ListContainer>
        {isLoading && <Spinner />}
        {!isError &&
          !isLoading &&
          data &&
          data.length > 0 &&
          data.map((live) => (
            <List key={live.id}>
              <p>{live.start_time.slice(0, -3)}</p>
              <p>{live.end_time.slice(0, -3)}</p>
              <p>{Utils.strReplace(live.item, ",", " /")}</p>
              <p>{live.channel.image}</p>
            </List>
          ))}
      </ListContainer>
    </div>
  );
};

export default LiveList;
