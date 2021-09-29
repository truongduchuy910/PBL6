import React, { useState } from "react";
import { Box, HStack, Image, Text, Button, VStack, Divider } from "native-base";
import {
  InteractionCommentCreateSimple,
  InteractionCommentListSimple,
  InteractionCommentListToggleButton,
} from "../../Interaction/Comment";
import {
  InteractionReactionCreateButton,
  InteractionReactionListIconTextWithCount,
} from "../../Interaction/Reaction";
import { PostDeleteText, PostUpdateText } from "../index";
import { UploadImageListCarousel } from "../../Upload/Image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function UI() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  return (
    <Box
      maxW="600"
      mx="auto"
      my="2"
      w="100%"
      py="4"
      rounded="xl"
      borderWidth="1"
      borderColor="gray.100"
    >
      <HStack
        space="3"
        display="flex"
        flexDirection="row"
        w="100%"
        px="3"
        alignItems="center"
        position="relative"
        zIndex="1"
      >
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
          }}
          alt="Profile image"
          size="8"
          rounded="100"
        />
        <Text color="gray.900" fontWeight="600" fontSize="14">
          Trần Ngọc Huy
        </Text>
        <Text color="gray.400" fontSize="12">
          14 giờ
        </Text>
        {isModalOpen && (
          <VStack
            position="absolute"
            right="3"
            top="8"
            borderColor="gray.100"
            borderWidth="1"
            bgColor="white"
            rounded="10"
            space="1"
            p="2"
          >
            <PostUpdateText />
            <Divider w="100%" bgColor="gray.100" />
            <PostDeleteText />
          </VStack>
        )}
        <Button
          bgColor="transparent"
          p="1"
          color="gray.500"
          ml="auto"
          onPress={toggleModal}
        >
          <HiOutlineDotsHorizontal />
        </Button>
      </HStack>
      <Text px="3" my="2">
        Lần đầu check in tại nhà hàng ở Paris 😍
      </Text>
      <UploadImageListCarousel />
      <Box px="3" mt="2">
        <InteractionReactionListIconTextWithCount />
      </Box>
      <Box px="3">
        <HStack
          w="100%"
          my="2"
          borderBottomWidth="1"
          borderBottomColor="gray.100"
          borderTopWidth="1"
          borderTopColor="gray.100"
        >
          <Box w="50%">
            <InteractionReactionCreateButton />
          </Box>
          <Box w="50%">
            <InteractionCommentListToggleButton />
          </Box>
        </HStack>
        <InteractionCommentCreateSimple my="10" />
        <InteractionCommentListSimple />
      </Box>
    </Box>
  );
}
export default UI;
