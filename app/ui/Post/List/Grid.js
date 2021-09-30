import React from "react";
import { HStack, Box } from "native-base";
import PostItemImageOnly from "../Item/ImageOnly";

const data = [
  {
    id: 1,
    link: "#",
    thumbnailUrl:
      "https://vcdn1-dulich.vnecdn.net/2018/10/27/home-venice-italy.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=PnlZagm9qKzpioNh9CVmUA",
  },
  {
    id: 2,
    link: "#",
    thumbnailUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632806027/241259419_246687107340299_4139464774758156957_n_s1zuao.jpg",
  },
  {
    id: 3,
    link: "#",
    thumbnailUrl: "https://static.toiimg.com/photo/84475061.cms",
  },
  {
    id: 4,
    link: "#",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/proxy/oN_Gj3W0VeP1j2XAQ6NaH-uVITwMhLeIus4SKQpDRTdpcn4t9z-kxF2D9EkKeOOpP6NybLDAGVZH-1m9jH1bPuDtoW0LP38WB-EnnRe_It9JnePk3MAHg56i54s__jIaTdtrxM93L9_iTSA",
  },
  {
    id: 5,
    link: "#",
    thumbnailUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 6,
    link: "#",
    thumbnailUrl:
      "https://tuandungtravel.com/wp-content/uploads/2019/07/du-lich-ba-na-hills-tuan-dung-travel-9.jpg",
  },
];

function UI() {
  return (
    <HStack
      maxW="900"
      mx="auto"
      w="100%"
      flexWrap="wrap"
      justifyContent="center"
    >
      {data.map((item) => (
        <Box
          key={item.id}
          m="0.5%"
          minW="30%"
          alignItems="center"
          borderWidth="1"
          borderColor="gray.100"
          rounded="10"
          space="1.5"
          overflow="hidden"
        >
          <PostItemImageOnly key={item.id} item={item} />
        </Box>
      ))}
    </HStack>
  );
}
export default UI;
