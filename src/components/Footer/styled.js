import styled from "styled-components"
import Icons from "../icons"

export const Footer = styled.div`
  background: #a9d0f5;
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 185px;
  position: relative;
  bottom: 0;
  left: 0;
`

export const GitHubIcon = styled(Icons.Github)`
  margin-right: 10px;
  width: 35px;
  color: black;

  &:hover {
    color: white;
  }
`
export const InstaIcon = styled(Icons.Instagram)`
  margin-right: 10px;
  width: 35px;
  color: black;

  &:hover {
    color: white;
  }
`
