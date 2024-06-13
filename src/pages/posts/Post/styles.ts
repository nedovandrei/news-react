import { styled } from 'styled-components'

export const Container = styled.div`
 display:flex;
 margin-top:24px;
`

export const Id = styled.span`
 
`

export const Title = styled.h3`
  font-size: 24px;
    line-height: 26px;
    position: relative;
    color: rgb(15, 23, 42);
    letter-spacing: 0px;
    margin: -2.5px 0px 8px;
    font-weight: 500;
`

export const Link = styled.a`
  width: 240px;
  position:relative;
`

export const Thumbnail = styled.img`
    width: 240px;
    border-radius: 4px;
    overflow: hidden;
    pointer-events: none;
`

export const ContentDiv = styled.div`
  height: 100%;
  margin-left: 16px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`

export const Intro = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 0px 10px;
  color: rgb(15, 23, 42);
`

export const Date = styled.p`
font-size: 14px;
    color: rgb(128, 128, 128);
    line-height: 0;
    width: max-content;
`