import React, { useState } from "react";
import { Box, HStack, Image, Text, Button, VStack, Divider } from "native-base";
import {
  InteractionCommentListToggleButton,
} from "../../Interactive/Comment";
import {
  InteractionReactionCreateButton,
  InteractionReactionListIconTextWithCount,
} from "../../Interactive/Reaction";
import { AlbumCreateButton } from "../../Album";
import { PostDeleteText, PostUpdateText } from "../index";
import { UploadImageListCarousel } from "../../Upload/Image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PostItem from "./Controller";
import InteractiveItemSimple from "../../Interactive/Item/Simple";

function formatTimeCreate(createdAt) {
  var dayjs = require("dayjs");
  let stringTime = "";
  const createdTime = dayjs(createdAt);
  const now = dayjs();
  if (now.format("DD-MM-YYYY") === createdTime.format("DD-MM-YYYY")) {
    if (Number(now.get("hour")) - Number(createdTime.get("hour")) === 0)
      stringTime =
        Number(now.get("minute")) -
        Number(createdTime.get("minute")) +
        " phút trước";
    else
      stringTime =
        Number(now.get("hour")) -
        Number(createdTime.get("hour")) +
        " giờ trước";
  } else stringTime = createdTime.format("DD-MM-YYYY");
  return stringTime;
}

function UI({ loading, error, post, refetch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stringCreatedAt = formatTimeCreate(post?.createdAt);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };
  if (loading) return "...";
  return (
    <Box
      maxW={["100%", "container.md"]}
      my={1}
      py={4}
      rounded={["0", "xl"]}
      borderWidth="1"
      borderColor="gray.100"
    >
      <HStack
        space="3"
        display="flex"
        flexDirection="row"
        px="3"
        alignItems="center"
        position="relative"
        zIndex="1"
      >
        <Image
          source={{
            uri:
              "https://odanang.net" +
              (post?.createdBy?.avatar?.publicUrl ||
                "/upload/img/no-image.png"),
          }}
          alt="Profile image"
          size="8"
          rounded="100"
        />
        <Text color="gray.900" fontWeight="600" fontSize="14">
          {post?.createdBy?.name}
        </Text>
        <Text color="gray.400" fontSize="12">
          {stringCreatedAt}
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
            <Divider w="full" bgColor="gray.100" />
            <PostDeleteText id={post?.id} />
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
        {post.content}
      </Text>
      <UploadImageListCarousel
        urls={post?.images?.map(
          (image) => "https://odanang.net" + image?.file?.publicUrl
        )}
      />
      <Box px="3" mt="2">
        <InteractionReactionListIconTextWithCount
          where={{ interactive: { post: { id: post.id } } }
        }
        />
      </Box>
      <Box px="3">
        <HStack
          w="full"
          my="2"
          borderBottomWidth="1"
          borderBottomColor="gray.100"
          borderTopWidth="1"
          borderTopColor="gray.100"
          justifyContent="space-around"
        >
          <Box w="33%">
            <InteractionReactionCreateButton interactive={post.interactive} refetch={refetch}/>
          </Box>
          <Box w="33%">
            <InteractionCommentListToggleButton />
          </Box>
          <Box w="33%">
            <AlbumCreateButton />
          </Box>
        </HStack>
        <InteractiveItemSimple
          where={{ post: { id: post.id } }}
          sortBy="createdAt_DESC"
        />
      </Box>
    </Box>
  );
}
export default function PostItemSimple(props) {
  return <PostItem {...props} UI={UI} />;
}
