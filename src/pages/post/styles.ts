import { styled } from 'styled-components'

export const Container = styled.div`
  background: rgb(245, 245, 245);
    padding-left: 16px;
    padding-right: 16px;
    margin: 0px;
    padding: 36px 0px 0px;
    font-family: Onest, sans-serif, Helvetica;
    line-height: 1.2;
    text-size-adjust: 100%;
    max-width: 100%;
    overflow-x: hidden;
`

export const Header = styled.div`

`

export const Logo = styled.img`
  margin: 30px auto;
  width: 170px;
  height: 48px;
  display:block;

`

export const List = styled.div`
  margin: 0px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 984px;
  border-radius: 8px;
`


export const PostContainer = styled.div`
    max-width: 1240px;
    margin: 0px auto;
    width: 100%;
    position: relative;
`

export const Title = styled.h1`
  color: rgb(15, 23, 42);
    font-size: 40px;
    letter-spacing: -1px;
    line-height: 44px;
    font-weight: 700;
    margin: 12px 0px 0px;
`

export const Long = styled.div`
color: rgb(15, 23, 42);
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 27px;
`

export const Intro = styled.p`
  color: rgb(15, 23, 42);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    margin-top: 16px;
    margin-bottom: 24px;
    line-height: 28px;
`

export const Thumbnail = styled.img`
  width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`