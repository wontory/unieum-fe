import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import useTitle from "../hooks/useTitle";

import List from "../components/List/List";
import EmptyList from "../components/List/EmptyList";

import { testGeneratorApi } from "../apis/testGeneratorApi";

const MyPage = () => {
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items to display per page
  const totalPages = Math.ceil(listData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    useTitle("복습");
    testGeneratorApi
      .getList()
      .then((res) => {
        setListData(res.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Box width={"100%"} mb={4}>
        <Typography variant="h1">복습</Typography>
      </Box>
      <Box width={"100%"}>
        <Stack
          width={"100%"}
          spacing={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {listData.length === 0 ? (
            <EmptyList />
          ) : (
            listData
              .sort((a, b) => {
                const dateA = new Date(a.testCreateAt);
                const dateB = new Date(b.testCreateAt);
                return dateB.getTime() - dateA.getTime(); // Sort in descending order
              })
              .slice(startIndex, endIndex)
              .map((item) => {
                const testCreatedAt = new Date(item.testCreateAt);
                const currentTime = new Date();
                const timeDifference = Math.floor(
                  (currentTime.getTime() - testCreatedAt.getTime()) / 60000 // Convert to minutes
                );

                let formattedDate;
                if (timeDifference < 60) {
                  // Within the last hour
                  formattedDate = `${timeDifference} minutes ago`;
                } else if (timeDifference < 1440) {
                  // Within the last 24 hours
                  const hoursDifference = Math.floor(timeDifference / 60); // Convert minutes to hours
                  if (hoursDifference === 1) {
                    formattedDate = "1 hour ago";
                  } else {
                    formattedDate = `${hoursDifference} hours ago`;
                  }
                } else {
                  formattedDate = testCreatedAt.toLocaleString();
                }
                return (
                  <>
                    <List
                      key={item.testGenerationId || ""}
                      testGenerationId={item.testGenerationId}
                      fileName={item.fileName || "Untitled"}
                      testCreateAt={formattedDate}
                    />
                    <Pagination
                      count={totalPages}
                      page={page}
                      color="primary"
                      onChange={handlePageChange}
                      variant="outlined"
                    />
                  </>
                );
              })
          )}
        </Stack>
      </Box>
    </>
  );
};

export default MyPage;
