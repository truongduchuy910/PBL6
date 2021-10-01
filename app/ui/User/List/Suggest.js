import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text } from "native-base";
import {
  RelationshipUpdateButton,
  RelationshipDeleteDelete,
} from "../../Relationship";

const data = [
  {
    id: 1,
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 2,
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 3,
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
  {
    id: 4,
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 5,
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 6,
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
];

function UI() {
  return (
    <HStack
      maxW="600"
      mx="auto"
      w="100%"
      flexWrap="wrap"
      justifyContent="center"
    >
      {data.map((item) => (
        <VStack
          key={item.id}
          p="3"
          m="1.5"
          minW="30%"
          alignItems="center"
          borderWidth="1"
          borderColor="gray.100"
          rounded="8"
          space="1.5"
        >
          <Box>
            <Image
              source={{
                uri: item.profileImg,
              }}
              alt="Profile Image"
              size="20"
              mx="auto"
              mt="2"
              rounded="100"
            />
          </Box>
          <Text my="2">{item.name}</Text>
          <UserRelationshipUpdateButton />
          <UserRelationshipDeleteButton />
        </VStack>
      ))}
    </HStack>
  );
}
export default UI;
