import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text, Divider } from "native-base";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
} from "../../Relationship";
import Controller from "./Controller";
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
  {
    id: 6,
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
  {
    id: 7,
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 8,
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 9,
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
  {
    id: 10,
    name: "Trần Ngọc Huy",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
  },
  {
    id: 11,
    name: "Trần Diệp Phương",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 12,
    name: "Trần Vũ Minh Triết",
    profileImg:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
  },
];

function UI({ loading, error, allUsers, count, refetch }) {
  return (
    <VStack>
      <Box w="full" mt="5" mb="2" px="0.5%">
        <Text fontSize="18" fontWeight="600" color="gray.700">
          Những người bạn có thể biết
        </Text>
      </Box>

      <HStack
        maxw="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {allUsers.map((user) => (
          <VStack
            key={user.id}
            p="3"
            minW={["49%", "32%", "24%"]}
            m="0.5%"
            space={["1", "1.5"]}
            alignItems="center"
            borderWidth="1"
            borderColor="gray.100"
            rounded="8"
          >
            <Box>
              <Image
                source={{
                  uri: user?.avatar?.publicUrl,
                }}
                alt={user.name}
                size="20"
                mx="auto"
                mt="2"
                rounded="100"
              />
            </Box>
            <Text my="2">{user.name}</Text>
            <RelationshipCreateButton />
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
export default function UserListSuggest(props) {
  return <Controller {...props} UI={UI} />;
}
