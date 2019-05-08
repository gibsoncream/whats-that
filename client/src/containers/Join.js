import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import FormField from "../components/FormField";
import FormLabel from "../components/FormLabel";
import InputField from "../components/InputField";

const stateTest = { name: "", gameName: "" };

const handleChangeTest = event => {
  const value = event.target.value;
  stateTest.name = value;
};

const handleSubmitTest = event => {
  event.preventDefault();
  // would save the name
};

const Join = () => {
  return (
    <ContainerWrapper>
      <form onSubmit={handleSubmitTest}>
        <FormField>
          <FormLabel>Enter your name: </FormLabel>
          <InputField type="text" name="name" onChange={handleChangeTest} />
        </FormField>
        <FormField>
          <FormLabel>Enter Game Name: </FormLabel>
          <InputField type="text" name="gameName" onChange={handleChangeTest} />
        </FormField>
        <Button primary marginTop type="submit">
          Join
        </Button>
      </form>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  text-align: center;
  align-items: center;
  margin: 5vh 0;
`;

export default Join;