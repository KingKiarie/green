import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import "../styles/styles.scss";

export default function SearchInput() {
  return (
    <>
      <div>
        <InputGroup>
          <Input
            placeholder="Search Service"
            size={"md"}
            htmlSize={80}
            width={"auto"}
          />
          <InputRightElement>
            <FaSearch color="green.600" />
          </InputRightElement>
        </InputGroup>
      </div>
    </>
  );
}
