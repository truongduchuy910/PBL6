import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text, Heading, Spacer } from "native-base";
import { Link } from "@react-navigation/native";

// Fetch 12 items
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
];

function UI() {
  return (
    <VStack my="2" w="full">
      <HStack mb="2" w="full">
        <Text fontSize="16" fontWeight="600" color="gray.400">
          Gợi ý cho bạn
        </Text>
        <Spacer />
        <Link to={{ screen: "friendsuggestion" }}>
          <Text color="green.500">Xem thêm</Text>
        </Link>
      </HStack>

      {data.map((item) => (
        <HStack
          key={item.id}
          m="1"
          mt="3"
          flex="1"
          maxw="full"
          w="260px"
          alignItems="center"
          rounded="8"
          space="4"
        >
          <Box>
            <Image
              source={{
                uri: item.profileImg,
              }}
              alt="Profile Image"
              size="8"
              mx="auto"
              rounded="100"
            />
          </Box>
          <Link to={{ screen: "user" }}>
            <Text fontWeight="600" color="gray.700">
              {item.name}
            </Text>
          </Link>
        </HStack>
      ))}
    </VStack>
  );
}
export default UI;
