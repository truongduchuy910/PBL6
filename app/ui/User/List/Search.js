import React, { Fragment, useState } from "react";
import { HStack, VStack, Box, Image, Text, Divider } from "native-base";
import { Link } from "@react-navigation/native";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
  RelationshipUpdateButton,
  RelationshipDeleteActive,
  RelationshipDeleteCancel,
} from "../../Relationship";

// Fetch 12 items
const data = [
  {
    id: 1,
    type: "yes",
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 2,
    type: "no",
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 3,
    type: "sending",
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
  {
    id: 4,
    type: "pending",
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
];

function UI() {
  return (
    <VStack>
      <HStack
        maxw="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {data.map((item) => (
          <HStack
            key={item.id}
            p={["3", "4"]}
            pl={["2", "4"]}
            minW="99%"
            m="0.5%"
            my="1"
            space={["0", "1.5"]}
            alignItems="center"
            borderWidth="1"
            borderColor="gray.100"
            rounded="xl"
            justifyContent="space-between"
          >
            <HStack alignItems="center" space={["3", "4"]}>
              <Box>
                <Image
                  source={{
                    uri: item.profileImg,
                  }}
                  alt="Profile Image"
                  size={["48px", "72px"]}
                  mx="auto"
                  my={["2.5", "1.5"]}
                  rounded="100"
                />
              </Box>
              <Link to={{ screen: "home" }}>
                <Text my="2" fontWeight="600">
                  {item.name}
                </Text>
              </Link>
            </HStack>
            {item.type === "pending" && (
              <VStack space="1.5">
                <Box w="120px">
                  <RelationshipUpdateButton />
                </Box>
                <Box w="120px">
                  <RelationshipDeleteDelete />
                </Box>
              </VStack>
            )}
            {item.type === "no" && (
              <Box w="120px">
                <RelationshipCreateButton />
              </Box>
            )}
            {item.type === "yes" && (
              <Box w="120px">
                <RelationshipDeleteActive />
              </Box>
            )}
            {item.type === "sending" && (
              <Box w="120px">
                <RelationshipDeleteCancel />
              </Box>
            )}
          </HStack>
        ))}
      </HStack>
    </VStack>
  );
}
export default UI;
