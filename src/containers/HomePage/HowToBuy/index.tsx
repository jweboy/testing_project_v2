import { Flex, SimpleGrid, Image } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import { listHowToBuyTokens } from "@src/constants/home";
import { ButtonComponent } from "@src/containers/PoolPage";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { BaseHomeProps } from "..";

const HowToBuy: React.FC<BaseHomeProps> = ({ isActive }) => {
  const router = useRouter();
  const handleBuyMkt = () => {
    router.push("/swap");
  };

  return (
    <Flex
      w="100%"
      px={{
        base: "16px",
        lg: "24px",
        "2xl": 0,
      }}
      mx="auto"
      direction={"column"}
      maxW="1200px"
      pt={{
        base: "48px",
        md: "80px",
        lg: "112px",
      }}
      overflow={"hidden"}
    >
      <Flex>
        <Flex position={"relative"} mx="auto">
          <Flex mt="150px" overflow={"hidden"}>
            <Flex
              position={"absolute"}
              left={"-80%"}
              className={clsx(
                isActive &&
                  "animate__animated animate__backInUp animate-delay__400ms"
              )}
            >
              <Typography
                type="headline1"
                color={"bg.primary"}
                fontSize={{
                  base: "75px",
                  md: "92px",
                }}
                fontWeight={"800"}
              >
                HOW
              </Typography>
            </Flex>
            <Flex position={"absolute"} left={"102%"}>
              <Typography
                type="headline1"
                color={"bg.primary"}
                fontSize={{
                  base: "75px",
                  md: "92px",
                }}
                fontWeight={"800"}
                className={clsx(
                  isActive &&
                    "animate__animated animate__backInUp animate-delay__400ms"
                )}
              >
                BUY
              </Typography>
            </Flex>
          </Flex>
          <div
            className={clsx(
              isActive &&
                "animate__animated animate__rotateIn animate__delay-600ms"
            )}
          >
            <Flex
              p="10px"
              w={{
                base: "300px",
                md: "348px",
              }}
              h={{
                base: "340px",
                md: "380px",
              }}
              position={"absolute"}
              zIndex={99}
            >
              <Flex
                w="100%"
                px="32px"
                pt="32px"
                borderRadius={"12px"}
                bg="bg.secondary"
                direction={"column"}
              >
                <Flex h="100px" direction={"column"}>
                  <Typography
                    fontWeight={"bold"}
                    type="headline2"
                    color={"text.primary"}
                    textAlign={"center"}
                  >
                    How to buy
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    type="headline2"
                    color={"text.brand"}
                    textAlign={"center"}
                  >
                    $MKT
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
            <Image
              w={{
                base: "290px",
                md: "300px",
              }}
              zIndex={99999}
              position={"absolute"}
              src="/buy-token.svg"
              ml="-50px"
              top={{
                base: "140px",
                md: "170px",
              }}
              // mt="-50px"
              alt="buy tokens"
            />
            <Flex
              p="10px"
              w={{
                base: "300px",
                md: "348px",
              }}
              h={{
                base: "340px",
                md: "380px",
              }}
              transform={"rotate(5.082deg)"}
            >
              <Flex
                w="100%"
                px="40px"
                py="32px"
                borderRadius={"12px"}
                direction={"column"}
                bg="bg.primary"
              ></Flex>
            </Flex>
          </div>
        </Flex>
      </Flex>

      <SimpleGrid
        mt="24px"
        columns={{
          base: 1,
          lg: 2,
        }}
        spacing={{ base: "16px", lg: "24px", xl: "32px" }}
      >
        {listHowToBuyTokens.map((item, idx) => {
          return (
            <Flex
              p={{
                base: "16px",
                lg: "24px",
                xl: "32px",
              }}
              border="1px solid"
              borderRadius={"12px"}
              borderColor={"bg.secondary"}
              bg="bg.default"
              key={`item-buy-${idx}`}
              align={"center"}
              className={clsx(
                isActive &&
                  `animate__animated animate__zoomIn animate__delay-${
                    600 * (idx + 1)
                  }ms`
              )}
            >
              <Image src={item?.image} alt="image how to buy" />
              <Flex pl="24px" direction={"column"}>
                <Typography type="headline5" color="text.primary">
                  {idx + 1}. {item.title}
                </Typography>
                <Typography type="paragraph1" color="text.read">
                  {item.description}
                </Typography>
              </Flex>
            </Flex>
          );
        })}
      </SimpleGrid>
      <ButtonComponent
        mt="40px"
        maxW="242px"
        w="100%"
        mx="auto"
        onClick={handleBuyMkt}
        title="Buy now"
        className={clsx(
          isActive &&
            "animate__animated animate__zoomIn animate__delay-2800ms mb-4"
        )}
      />
    </Flex>
  );
};

export default HowToBuy;
