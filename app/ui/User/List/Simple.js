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
    type: "yes",
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
  {
    id: 4,
    type: "pending",
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 5,
    type: "sending",
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 6,
    type: "yes",
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
  {
    id: 7,
    type: "pending",
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 8,
    type: "no",
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
];

function UI() {
  return (
    <VStack>
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Tất cả bạn bè
        </Text>
      </Box>

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
            p="12px"
            pl={["8px", "12px"]}
            minW={["100%", "99%", "49%"]}
            m="0.5%"
            mx={["0", "0.5%"]}
            space={["0", "6px"]}
            alignItems="center"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="8px"
            justifyContent="space-between"
          >
            <HStack alignItems="center" space={["12px", "16px"]}>
              <Box>
                <Image
                  source={{
                    uri: item.profileImg,
                  }}
                  alt="Profile Image"
                  size={["48px", "72px"]}
                  mx="auto"
                  my={["10px", "6px"]}
                  rounded="100"
                />
              </Box>
              <Link to={{ screen: "home" }}>
                <Text my="8px" fontWeight="600">
                  {item.name}
                </Text>
              </Link>
            </HStack>
            {item.type === "pending" && (
              <VStack space="6px">
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
