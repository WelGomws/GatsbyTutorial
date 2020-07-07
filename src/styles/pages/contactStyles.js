import styled, { css } from "styled-components"
import Icons from "../../components/icons"

export const EmailWrapper = styled(Icons.Email)`
  color: ${props => (props.color ? props.color : "#e3a")};
  width: ${props => (props.width ? props.width : "35px")};
  margin: 5px;

  ${props =>
    props.danger &&
    css`
      color: red;
      width: 35px;
    `}
`
export const PhoneWrapper = styled(Icons.Email)`
  color: ${props => (props.color ? props.color : "#e3a")};
  width: ${props => (props.width ? props.width : "35px")};
  margin: 5px;

  ${props =>
    props.danger &&
    css`
      color: red;
      width: 35px;
    `}
`
export const LocationOnWrapper = styled(Icons.Email)`
  color: ${props => (props.color ? props.color : "#e3a")};
  width: ${props => (props.width ? props.width : "35px")};
  margin: 5px;

  ${props =>
    props.danger &&
    css`
      color: red;
      width: 35px;
    `};
`
