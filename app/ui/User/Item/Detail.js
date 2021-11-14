import React from "react";
import { Link } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  Text,
  Divider,
  Stack,
} from "native-base";
import { PostListGrid } from "../../Post";
import {
  RelationshipUpdateButton,
  RelationshipDeleteDelete,
  RelationshipCreateButton,
} from "../../Relationship";
import Controller from "./Controller";
import DetailSkeleton from "./DetailSkeleton";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PostListCount from "../../Post/List/Count";
import RelationshipListCount from "../../Relationship/List/Count";
import Field from "../../Field";
function UI({ loading, error, user, posts }) {
  if (loading) return <DetailSkeleton />;
  if (error) return "error";
  return (
    <VStack maxw="full" mx="auto" my="5" w="full" space="4">
      <HStack space="7" m="1%" alignItems="center">
        <Box>
          <Image
            source={{
              uri:
                "https://odanang.net" +
                (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
            }}
            alt="Alternate Text"
            w={["100px", "120px"]}
            h={["100px", "120px"]}
            rounded="100"
          />
        </Box>
        <VStack flex="1" space={["2", "3"]}>
          <HStack space="2">
            <Text fontSize={["20", "22"]} fontWeight="600">
              {user?.name}
            </Text>
            <Button bgColor="transparent" p="2" color="gray.500">
              <HiOutlineDotsHorizontal />
            </Button>
          </HStack>

          <HStack space="4">
            <Text fontSize="14" color="gray.500">
              {/* <PostListCount /> bài đăng */}
              {posts.length} bài đăng
            </Text>
            <Text fontSize="14" color="gray.500">
              <RelationshipListCount /> bạn bè
            </Text>
          </HStack>
        </VStack>
      </HStack>

      <VStack space="2" mx="1%" my={["1", "0"]}>
        <Stack
          space="2"
          alignItems={["start", "center"]}
          direction={["column", "row"]}
        >
          {/* <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
            Trần Ngọc Huy đã gửi lời mời kết bạn
          </Text>
          <HStack space="2">
            <Box w="130px">
              <RelationshipUpdateButton />
            </Box>
            <Box w="130px">
              <RelationshipDeleteDelete />
            </Box>
          </HStack> */}
          {/* <HStack space="2">
            <RelationshipCreateButton />
          </HStack> */}
        </Stack>
      </VStack>

      <VStack space="2" m="1%">
        <Text fontSize="18" fontWeight="600" color="gray.700">
          Giới thiệu
        </Text>
        <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        <Text fontSize="14" fontWeight="400" color="gray.600" lineHeight="26px">
          <Field>{user.description}</Field>
        </Text>
      </VStack>

      <VStack space="2" m="1%">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="18" fontWeight="600" color="gray.700">
            Bạn bè
          </Text>
          <Link to={{ screen: "friends" }}>
            <Text color="green.500" textDecoration="none">
              Xem tất cả
            </Text>
          </Link>
        </HStack>
        <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
      </VStack>
      <Box>
        <VStack w="98%" space="2" m="1%">
          <Text fontSize="18" fontWeight="600" color="gray.700">
            Bài viết
          </Text>
          <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        </VStack>
        <PostListGrid />
      </Box>
    </VStack>
  );
}
export { UI };
export default function UserItemDetail(props) {
  return <Controller {...props} UI={UI} />;
}
